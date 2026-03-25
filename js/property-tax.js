var localityMap = {
  'delmar': { town: 'Bethlehem', county: 'Albany' },
  'elsmere': { town: 'Bethlehem', county: 'Albany' },
  'slingerlands': { town: 'Bethlehem', county: 'Albany' },
  'glenmont': { town: 'Bethlehem', county: 'Albany' },
  'latham': { town: 'Colonie', county: 'Albany' },
  'loudonville': { town: 'Colonie', county: 'Albany' },
  'troy': { town: 'Troy', county: 'Rensselaer' },
  'albany': { town: 'Albany', county: 'Albany' },
  'schenectady': { town: 'Schenectady', county: 'Schenectady' },
  'buffalo': { town: 'Buffalo', county: 'Erie' },
  'amherst': { town: 'Amherst', county: 'Erie' },
  'cheektowaga': { town: 'Cheektowaga', county: 'Erie' },
  'rochester': { town: 'Rochester', county: 'Monroe' },
  'brighton': { town: 'Brighton', county: 'Monroe' },
  'pittsford': { town: 'Pittsford', county: 'Monroe' },
  'syracuse': { town: 'Syracuse', county: 'Onondaga' },
  'liverpool': { town: 'Salina', county: 'Onondaga' },
  'utica': { town: 'Utica', county: 'Oneida' },
  'rome': { town: 'Rome', county: 'Oneida' },
  'binghamton': { town: 'Binghamton', county: 'Broome' },
  'vestal': { town: 'Vestal', county: 'Broome' },
  'ithaca': { town: 'Ithaca', county: 'Tompkins' },
  'poughkeepsie': { town: 'Poughkeepsie', county: 'Dutchess' },
  'newburgh': { town: 'Newburgh', county: 'Orange' },
  'middletown': { town: 'Middletown', county: 'Orange' },
  'kingston': { town: 'Kingston', county: 'Ulster' },
  'white plains': { town: 'White Plains', county: 'Westchester' },
  'yonkers': { town: 'Yonkers', county: 'Westchester' },
  'niagara falls': { town: 'Niagara Falls', county: 'Niagara' },
  'elmira': { town: 'Elmira', county: 'Chemung' },
  'corning': { town: 'Corning', county: 'Steuben' },
  'auburn': { town: 'Auburn', county: 'Cayuga' },
  'watertown': { town: 'Watertown', county: 'Jefferson' },
  'plattsburgh': { town: 'Plattsburgh', county: 'Clinton' },
  'glens falls': { town: 'Queensbury', county: 'Warren' },
  'saratoga springs': { town: 'Saratoga Springs', county: 'Saratoga' },
  'clifton park': { town: 'Clifton Park', county: 'Saratoga' },
  'lake placid': { town: 'North Elba', county: 'Essex' },
  'cortland': { town: 'Cortland', county: 'Cortland' },
  'geneva': { town: 'Geneva', county: 'Ontario' },
  'canandaigua': { town: 'Canandaigua', county: 'Ontario' }
};

var allData = [];
var compareItems = [];
var currentChart = null;
var currentResults = [];

fetch('../data/property_tax.json')
  .then(function(r) { return r.json(); })
  .then(function(data) {
    allData = data;
    populateRankCounty();
  })
  .catch(function(err) { console.error('Error loading data:', err); });

function switchMode() {
  var mode = document.getElementById('mode-select').value;
  document.getElementById('single-filters').classList.add('hidden');
  document.getElementById('compare-filters').classList.add('hidden');
  document.getElementById('rank-filters').classList.add('hidden');
  document.getElementById('results-section').classList.add('hidden');
  compareItems = [];
  if (mode === 'single') {
    document.getElementById('single-filters').classList.remove('hidden');
    populateSingleCounty();
  } else if (mode === 'compare') {
    document.getElementById('compare-filters').classList.remove('hidden');
    populateCompareCounty();
  } else if (mode === 'rank') {
    document.getElementById('rank-filters').classList.remove('hidden');
  }
}

function populateSingleCounty() {
  var type = document.getElementById('single-type').value;
  var data = allData;
  if (type) data = data.filter(function(r) { return r.municipality_type === type; });
  var counties = [];
  data.forEach(function(r) { if (r.county && counties.indexOf(r.county) === -1) counties.push(r.county); });
  counties.sort();
  var sel = document.getElementById('single-county');
  sel.innerHTML = '<option value="">-- All Counties --</option>';
  counties.forEach(function(c) { sel.innerHTML += '<option value="' + c + '">' + c + '</option>'; });
  populateSingleMuni();
}

function populateSingleMuni() {
  var type = document.getElementById('single-type').value;
  var county = document.getElementById('single-county').value;
  var data = allData;
  if (type) data = data.filter(function(r) { return r.municipality_type === type; });
  if (county) data = data.filter(function(r) { return r.county === county; });
  var munis = [];
  data.forEach(function(r) { if (r.municipality_name && munis.indexOf(r.municipality_name) === -1) munis.push(r.municipality_name); });
  munis.sort();
  var sel = document.getElementById('single-muni');
  sel.innerHTML = '<option value="">-- All Municipalities --</option>';
  munis.forEach(function(m) { sel.innerHTML += '<option value="' + m + '">' + m + '</option>'; });
}

function runSingle() {
  var type = document.getElementById('single-type').value;
  var county = document.getElementById('single-county').value;
  var muni = document.getElementById('single-muni').value;
  var propVal = parseFloat(document.getElementById('single-value').value) || null;
  var results = allData;
  if (type) results = results.filter(function(r) { return r.municipality_type === type; });
  if (county) results = results.filter(function(r) { return r.county === county; });
  if (muni) results = results.filter(function(r) { return r.municipality_name === muni; });
  currentResults = results;
  renderTable(results, propVal, 'Single Report Results');
  renderChart(results, 'total_tax_rate', 'Total Tax Rate (per $1,000)', 'Tax Rate Comparison');
}

function populateCompareCounty() {
  var type = document.getElementById('compare-type').value;
  var data = allData;
  if (type) data = data.filter(function(r) { return r.municipality_type === type; });
  var counties = [];
  data.forEach(function(r) { if (r.county && counties.indexOf(r.county) === -1) counties.push(r.county); });
  counties.sort();
  var sel = document.getElementById('compare-county');
  sel.innerHTML = '<option value="">-- Select County --</option>';
  counties.forEach(function(c) { sel.innerHTML += '<option value="' + c + '">' + c + '</option>'; });
  populateCompareMuni();
}

function populateCompareMuni() {
  var type = document.getElementById('compare-type').value;
  var county = document.getElementById('compare-county').value;
  var data = allData;
  if (type) data = data.filter(function(r) { return r.municipality_type === type; });
  if (county) data = data.filter(function(r) { return r.county === county; });
  var munis = [];
  data.forEach(function(r) { if (r.municipality_name && munis.indexOf(r.municipality_name) === -1) munis.push(r.municipality_name); });
  munis.sort();
  var sel = document.getElementById('compare-muni');
  sel.innerHTML = '<option value="">-- Select --</option>';
  munis.forEach(function(m) { sel.innerHTML += '<option value="' + m + '">' + m + '</option>'; });
}

function addToCompare() {
  var muni = document.getElementById('compare-muni').value;
  if (!muni) { alert('Please select a municipality first.'); return; }
  var type = document.getElementById('compare-type').value;
  var county = document.getElementById('compare-county').value;
  var data = allData;
  if (type) data = data.filter(function(r) { return r.municipality_type === type; });
  if (county) data = data.filter(function(r) { return r.county === county; });
  var record = null;
  for (var i = 0; i < data.length; i++) {
    if (data[i].municipality_name === muni) { record = data[i]; break; }
  }
  if (!record) { alert('Municipality not found.'); return; }
  var key = muni + '|' + record.county;
  for (var j = 0; j < compareItems.length; j++) {
    if (compareItems[j].key === key) { alert('Already in list.'); return; }
  }
  if (compareItems.length >= 10) { alert('Maximum 10 locations.'); return; }
  compareItems.push({ key: key, muni: muni, county: record.county });
  renderCompareTags();
}

function renderCompareTags() {
  var box = document.getElementById('compare-list-box');
  var tags = document.getElementById('compare-tags');
  if (compareItems.length === 0) { box.classList.add('hidden'); return; }
  box.classList.remove('hidden');
  var html = '';
  for (var i = 0; i < compareItems.length; i++) {
    html += '<span class="compare-tag">' + compareItems[i].muni + ' (' + compareItems[i].county + ')' +
      ' <button onclick="removeCompare(' + i + ')">X</button></span>';
  }
  tags.innerHTML = html;
}

function removeCompare(i) {
  compareItems.splice(i, 1);
  renderCompareTags();
}

function runCompare() {
  if (compareItems.length < 2) { alert('Please add at least 2 locations to compare.'); return; }
  var propVal = parseFloat(document.getElementById('compare-value').value) || null;
  var results = [];
  for (var i = 0; i < compareItems.length; i++) {
    for (var j = 0; j < allData.length; j++) {
      if (allData[j].municipality_name === compareItems[i].muni && allData[j].county === compareItems[i].county) {
        results.push(allData[j]);
        break;
      }
    }
  }
  currentResults = results;
  renderTable(results, propVal, 'Comparison Results');
  renderChart(results, 'total_tax_rate', 'Total Tax Rate (per $1,000)', 'Tax Rate Comparison');
}

function populateRankCounty() {
  var counties = [];
  allData.forEach(function(r) { if (r.county && counties.indexOf(r.county) === -1) counties.push(r.county); });
  counties.sort();
  var sel = document.getElementById('rank-county');
  sel.innerHTML = '<option value="">-- All Counties --</option>';
  counties.forEach(function(c) { sel.innerHTML += '<option value="' + c + '">' + c + '</option>'; });
}

function runRank() {
  var type = document.getElementById('rank-type').value;
  var county = document.getElementById('rank-county').value;
  var order = document.getElementById('rank-order').value;
  var limitVal = document.getElementById('rank-limit').value;
  var results = allData;
  if (type) results = results.filter(function(r) { return r.municipality_type === type; });
  if (county) results = results.filter(function(r) { return r.county === county; });
  results = results.filter(function(r) { return r.total_tax_rate != null; });
  results.sort(function(a, b) { return order === 'asc' ? a.total_tax_rate - b.total_tax_rate : b.total_tax_rate - a.total_tax_rate; });
  if (limitVal !== 'all') results = results.slice(0, parseInt(limitVal));
  currentResults = results;
  renderTable(results, null, 'Ranked Results');
  renderChart(results.slice(0, 20), 'total_tax_rate', 'Total Tax Rate (per $1,000)', 'Top Ranked Tax Rates');
}

function renderTable(data, propVal, title) {
  document.getElementById('results-section').classList.remove('hidden');
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-count').textContent = data.length + ' records';
  var thead = document.getElementById('results-thead');
  var tbody = document.getElementById('results-tbody');
  var noRes = document.getElementById('no-results');
  if (data.length === 0) {
    thead.innerHTML = '';
    tbody.innerHTML = '';
    noRes.classList.remove('hidden');
    document.getElementById('chart-box').classList.add('hidden');
    return;
  }
  noRes.classList.add('hidden');
  document.getElementById('chart-box').classList.remove('hidden');
  var extraCol = propVal ? '<th>Est. Tax Bill ($)</th>' : '';
  thead.innerHTML = '<tr><th>#</th><th>Municipality</th><th>Type</th><th>County</th><th>SD Rate</th><th>County Rate</th><th>Muni Rate</th><th>Village Rate</th><th>Total Rate</th>' + extraCol + '</tr>';
  var rows = '';
  for (var i = 0; i < data.length; i++) {
    var r = data[i];
    var bill = propVal ? '$' + Math.round((r.total_tax_rate / 1000) * propVal).toLocaleString('en-US') : '';
    rows += '<tr><td>' + (i + 1) + '</td><td><strong>' + (r.municipality_name || '--') + '</strong></td><td>' + capitalize(r.municipality_type || '--') + '</td><td>' + (r.county || '--') + '</td><td>' + fmt(r.sd_full_value_tax_rate) + '</td><td>' + fmt(r.county_full_value_tax_rate) + '</td><td>' + fmt(r.municipality_full_value_tax_rate) + '</td><td>' + fmt(r.village_full_value_tax_rate) + '</td><td><strong>' + fmt(r.total_tax_rate) + '</strong></td>' + (propVal ? '<td><strong>' + bill + '</strong></td>' : '') + '</tr>';
  }
  tbody.innerHTML = rows;
}

function renderChart(data, field, label, title) {
  if (currentChart) { currentChart.destroy(); }
  document.getElementById('chart-title').textContent = title;
  var labels = [];
  var values = [];
  for (var i = 0; i < data.length; i++) {
    labels.push(data[i].municipality_name);
    values.push(data[i][field] || 0);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  currentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: values,
        backgroundColor: 'rgba(26, 58, 92, 0.75)',
        borderColor: '#1a3a5c',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Rate per $1,000 assessed value' } },
        x: { ticks: { maxRotation: 45, font: { size: 11 } } }
      }
    }
  });
}

function downloadCSV() {
  if (!currentResults.length) return;
  var headers = ['Municipality', 'Type', 'County', 'SD Rate', 'County Rate', 'Muni Rate', 'Village Rate', 'Total Rate'];
  var csv = headers.join(',') + '\n';
  for (var i = 0; i < currentResults.length; i++) {
    var r = currentResults[i];
    csv += '"' + (r.municipality_name || '') + '","' + (r.municipality_type || '') + '","' + (r.county || '') + '","' + (r.sd_full_value_tax_rate || '') + '","' + (r.county_full_value_tax_rate || '') + '","' + (r.municipality_full_value_tax_rate || '') + '","' + (r.village_full_value_tax_rate || '') + '","' + (r.total_tax_rate || '') + '"\n';
  }
  var blob = new Blob([csv], { type: 'text/csv' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'property_tax_results.csv';
  a.click();
}

function searchByAddress() {
  var input = document.getElementById('address-input').value.trim();
  if (!input) { showAddressStatus('Please enter an address.', 'error'); return; }
  if (allData.length === 0) { showAddressStatus('Data is still loading, please try again.', 'error'); return; }

  var parts = input.split(',').map(function(p) { return p.trim(); });
  var cityPart = '';
  if (parts.length >= 2) {
    cityPart = parts[1].toLowerCase()
      .replace(/\bny\b/gi, '')
      .replace(/\bnew york\b/gi, '')
      .replace(/\d{5}/g, '')
      .trim();
  } else {
    cityPart = parts[0].toLowerCase()
      .replace(/\d+/g, '')
      .replace(/\bst\b|\bave\b|\bblvd\b|\bdr\b|\brd\b|\bln\b|\bct\b|\bpl\b|\bway\b/gi, '')
      .replace(/\bny\b/gi, '')
      .trim();
  }

  // Check locality map first
  if (localityMap[cityPart]) {
    var mapped = localityMap[cityPart];
    for (var i = 0; i < allData.length; i++) {
      var r = allData[i];
      var name = (r.municipality_name || '').toLowerCase().replace('city of ', '').replace('town of ', '').trim();
      if (name === mapped.town.toLowerCase() && (r.county || '').toLowerCase() === mapped.county.toLowerCase()) {
        showAddressStatus('', 'hidden');
        displayAddressResults(r, input);
        return;
      }
    }
  }

  // Exact match
  for (var i = 0; i < allData.length; i++) {
    var name = (allData[i].municipality_name || '').toLowerCase().replace('city of ', '').replace('town of ', '').trim();
    if (name === cityPart) {
      showAddressStatus('', 'hidden');
      displayAddressResults(allData[i], input);
      return;
    }
  }

  // Starts with match
  if (cityPart.length >= 4) {
    for (var i = 0; i < allData.length; i++) {
      var name = (allData[i].municipality_name || '').toLowerCase().replace('city of ', '').replace('town of ', '').trim();
      if (name.startsWith(cityPart)) {
        showAddressStatus('', 'hidden');
        displayAddressResults(allData[i], input);
        return;
      }
    }
  }

  // Word match
  var words = cityPart.split(' ').filter(function(w) { return w.length >= 4; });
  for (var w = 0; w < words.length; w++) {
    for (var i = 0; i < allData.length; i++) {
      var name = (allData[i].municipality_name || '').toLowerCase().replace('city of ', '').replace('town of ', '').trim();
      if (name === words[w] || name.startsWith(words[w])) {
        showAddressStatus('', 'hidden');
        displayAddressResults(allData[i], input);
        return;
      }
    }
  }

  showAddressStatus('No municipality found for "' + input + '". Try entering the town name directly, e.g. "Bethlehem, NY".', 'error');
}

function displayAddressResults(best, originalInput) {
  document.getElementById('address-found-text').textContent = best.municipality_name + ', ' + best.county + ' County, NY';
  document.getElementById('address-result-rates').innerHTML =
    '<div class="rate-grid">' +
    '<div class="rate-item"><span class="rate-label">School District Rate</span><span class="rate-value">' + fmt(best.sd_full_value_tax_rate) + '</span></div>' +
    '<div class="rate-item"><span class="rate-label">County Rate</span><span class="rate-value">' + fmt(best.county_full_value_tax_rate) + '</span></div>' +
    '<div class="rate-item"><span class="rate-label">Municipal Rate</span><span class="rate-value">' + fmt(best.municipality_full_value_tax_rate) + '</span></div>' +
    '<div class="rate-item"><span class="rate-label">Village Rate</span><span class="rate-value">' + fmt(best.village_full_value_tax_rate) + '</span></div>' +
    '<div class="rate-item highlight"><span class="rate-label">Total Combined Rate</span><span class="rate-value">' + fmt(best.total_tax_rate) + ' per $1,000</span></div>' +
    '</div>' +
    '<p class="rate-note">Searched for: <em>' + originalInput + '</em></p>';
  window._addressMatch = best;
  document.getElementById('address-bill-result').classList.add('hidden');
  document.getElementById('address-propval').value = '';
  document.getElementById('address-result').classList.remove('hidden');
}

function calcAddressBill() {
  var val = parseFloat(document.getElementById('address-propval').value);
  var match = window._addressMatch;
  if (!val || val <= 0) { alert('Please enter a valid property value.'); return; }
  if (!match) { alert('Please search for an address first.'); return; }
  var bill = Math.round((match.total_tax_rate / 1000) * val);
  var billEl = document.getElementById('address-bill-result');
  billEl.innerHTML = '<div class="bill-result-box"><span>Estimated Annual Property Tax Bill:</span><strong>$' + bill.toLocaleString('en-US') + '</strong><span class="bill-note">Based on ' + match.municipality_name + ', ' + match.county + ' County rate of ' + fmt(match.total_tax_rate) + ' per $1,000</span></div>';
  billEl.classList.remove('hidden');
}

function showAddressStatus(msg, type) {
  var el = document.getElementById('address-status');
  if (type === 'hidden' || !msg) { el.classList.add('hidden'); return; }
  el.textContent = msg;
  el.className = 'address-status ' + type;
  el.classList.remove('hidden');
}

function fmt(val) {
  if (val == null) return '--';
  return parseFloat(val).toFixed(4);
}

function capitalize(str) {
  if (!str) return '--';
  return str.charAt(0).toUpperCase() + str.slice(1);
}