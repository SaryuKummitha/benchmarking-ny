let allData = [];
let compareItems = [];
let currentChart = null;
let currentResults = [];

fetch('../data/benchmarking.json')
  .then(r => r.json())
  .then(data => {
    allData = data;
    populateRankCounty();
  })
  .catch(err => console.error('Error loading data:', err));

// ── SWITCH MODE ──
function switchMode() {
  const mode = document.getElementById('mode-select').value;
  document.getElementById('single-filters').classList.add('hidden');
  document.getElementById('compare-filters').classList.add('hidden');
  document.getElementById('rank-filters').classList.add('hidden');
  document.getElementById('track-filters').classList.add('hidden');
  document.getElementById('results-section').classList.add('hidden');
  document.getElementById('track-profile').classList.add('hidden');
  compareItems = [];

  if (mode === 'single') {
    document.getElementById('single-filters').classList.remove('hidden');
    populateSingleCounty();
  } else if (mode === 'compare') {
    document.getElementById('compare-filters').classList.remove('hidden');
    populateCompareCounty();
  } else if (mode === 'rank') {
    document.getElementById('rank-filters').classList.remove('hidden');
  } else if (mode === 'track') {
    document.getElementById('track-filters').classList.remove('hidden');
    populateTrackCounty();
  }
}

// ── SINGLE MODE ──
function populateSingleCounty() {
  const type = document.getElementById('single-type').value;
  let data = allData;
  if (type) data = data.filter(r => r.municipality_type === type);
  const counties = [...new Set(data.map(r => r.county))].filter(Boolean).sort();
  const sel = document.getElementById('single-county');
  sel.innerHTML = '<option value="">— All Counties —</option>';
  counties.forEach(c => sel.innerHTML += '<option value="' + c + '">' + c + '</option>');
  populateSingleMuni();
}

function populateSingleMuni() {
  const type = document.getElementById('single-type').value;
  const county = document.getElementById('single-county').value;
  let data = allData;
  if (type) data = data.filter(r => r.municipality_type === type);
  if (county) data = data.filter(r => r.county === county);
  const munis = [...new Set(data.map(r => r.municipality_name))].filter(Boolean).sort();
  const sel = document.getElementById('single-muni');
  sel.innerHTML = '<option value="">— All Municipalities —</option>';
  munis.forEach(m => sel.innerHTML += '<option value="' + m + '">' + m + '</option>');
}

function runSingle() {
  const type = document.getElementById('single-type').value;
  const county = document.getElementById('single-county').value;
  const muni = document.getElementById('single-muni').value;

  let results = allData;
  if (type) results = results.filter(r => r.municipality_type === type);
  if (county) results = results.filter(r => r.county === county);
  if (muni) results = results.filter(r => r.municipality_name === muni);

  currentResults = results;
  document.getElementById('track-profile').classList.add('hidden');
  renderTable(results, 'Single Report Results', 'expenditure_per_capita');
  renderChart(results.slice(0, 20), 'expenditure_per_capita', 'Expenditure Per Capita ($)', 'Expenditure Per Capita');
}

// ── COMPARE MODE ──
function populateCompareCounty() {
  const type = document.getElementById('compare-type').value;
  let data = allData;
  if (type) data = data.filter(r => r.municipality_type === type);
  const counties = [...new Set(data.map(r => r.county))].filter(Boolean).sort();
  const sel = document.getElementById('compare-county');
  sel.innerHTML = '<option value="">— Select County —</option>';
  counties.forEach(c => sel.innerHTML += '<option value="' + c + '">' + c + '</option>');
  populateCompareMuni();
}

function populateCompareMuni() {
  const type = document.getElementById('compare-type').value;
  const county = document.getElementById('compare-county').value;
  let data = allData;
  if (type) data = data.filter(r => r.municipality_type === type);
  if (county) data = data.filter(r => r.county === county);
  const munis = [...new Set(data.map(r => r.municipality_name))].filter(Boolean).sort();
  const sel = document.getElementById('compare-muni');
  sel.innerHTML = '<option value="">— Select —</option>';
  munis.forEach(m => sel.innerHTML += '<option value="' + m + '">' + m + '</option>');
}

function addToCompare() {
  const muni = document.getElementById('compare-muni').value;
  if (!muni) { alert('Please select a municipality first.'); return; }
  const type = document.getElementById('compare-type').value;
  const county = document.getElementById('compare-county').value;
  let data = allData;
  if (type) data = data.filter(r => r.municipality_type === type);
  if (county) data = data.filter(r => r.county === county);
  const record = data.find(r => r.municipality_name === muni);
  if (!record) { alert('Municipality not found.'); return; }
  const key = muni + '|' + record.county;
  if (compareItems.find(i => i.key === key)) { alert('Already in list.'); return; }
  if (compareItems.length >= 10) { alert('Maximum 10 locations.'); return; }
  compareItems.push({ key, muni, county: record.county });
  renderCompareTags();
}

function renderCompareTags() {
  const box = document.getElementById('compare-list-box');
  const tags = document.getElementById('compare-tags');
  if (compareItems.length === 0) { box.classList.add('hidden'); return; }
  box.classList.remove('hidden');
  tags.innerHTML = compareItems.map((item, i) =>
    '<span class="compare-tag">' + item.muni + ' (' + item.county + ')' +
    ' <button onclick="removeCompare(' + i + ')">✕</button></span>'
  ).join('');
}

function removeCompare(i) {
  compareItems.splice(i, 1);
  renderCompareTags();
}

function runCompare() {
  if (compareItems.length < 2) {
    alert('Please add at least 2 locations to compare.');
    return;
  }
  const metric = document.getElementById('compare-metric').value;
  const results = compareItems.map(item =>
    allData.find(r => r.municipality_name === item.muni && r.county === item.county)
  ).filter(Boolean);
  currentResults = results;
  document.getElementById('track-profile').classList.add('hidden');
  renderTable(results, 'Comparison Results', metric);
  renderChart(results, metric, metricLabel(metric), 'Comparison: ' + metricLabel(metric));
}

// ── RANK MODE ──
function populateRankCounty() {
  const counties = [...new Set(allData.map(r => r.county))].filter(Boolean).sort();
}

function runRank() {
  const type = document.getElementById('rank-type').value;
  const region = document.getElementById('rank-region').value;
  const size = document.getElementById('rank-size').value;
  const metric = document.getElementById('rank-metric').value;
  const order = document.getElementById('rank-order').value;
  const limitVal = document.getElementById('rank-limit').value;

  let results = allData;
  if (type) results = results.filter(r => r.municipality_type === type);
  if (region) results = results.filter(r => r.region === region);
  if (size) results = results.filter(r => r.size === size);
  results = results.filter(r => r[metric] != null);
  results.sort((a, b) => order === 'asc' ? a[metric] - b[metric] : b[metric] - a[metric]);
  if (limitVal !== 'all') results = results.slice(0, parseInt(limitVal));

  currentResults = results;
  document.getElementById('track-profile').classList.add('hidden');
  renderTable(results, 'Ranked Results — ' + metricLabel(metric), metric);
  renderChart(results.slice(0, 20), metric, metricLabel(metric), 'Top Ranked: ' + metricLabel(metric));
}

// ── TRACK MODE ──
function populateTrackCounty() {
  const type = document.getElementById('track-type').value;
  let data = allData;
  if (type) data = data.filter(r => r.municipality_type === type);
  const counties = [...new Set(data.map(r => r.county))].filter(Boolean).sort();
  const sel = document.getElementById('track-county');
  sel.innerHTML = '<option value="">— All Counties —</option>';
  counties.forEach(c => sel.innerHTML += '<option value="' + c + '">' + c + '</option>');
  populateTrackMuni();
}

function populateTrackMuni() {
  const type = document.getElementById('track-type').value;
  const county = document.getElementById('track-county').value;
  let data = allData;
  if (type) data = data.filter(r => r.municipality_type === type);
  if (county) data = data.filter(r => r.county === county);
  const munis = [...new Set(data.map(r => r.municipality_name))].filter(Boolean).sort();
  const sel = document.getElementById('track-muni');
  sel.innerHTML = '<option value="">— Select —</option>';
  munis.forEach(m => sel.innerHTML += '<option value="' + m + '">' + m + '</option>');
}

function runTrack() {
  const muni = document.getElementById('track-muni').value;
  const county = document.getElementById('track-county').value;
  if (!muni) { alert('Please select a municipality.'); return; }

  const record = allData.find(r =>
    r.municipality_name === muni &&
    (!county || r.county === county)
  );

  if (!record) {
    alert('No data found for this location.');
    return;
  }

  document.getElementById('results-section').classList.add('hidden');
  document.getElementById('track-profile').classList.remove('hidden');

  document.getElementById('profile-title').textContent =
    record.municipality_name + ', ' + record.county + ' County';

  document.getElementById('profile-content').innerHTML =
    '<div class="profile-grid">' +

      '<div class="profile-section">' +
        '<h3>General Information</h3>' +
        '<div class="profile-items">' +
          profileItem('Type', capitalize(record.municipality_type)) +
          profileItem('County', record.county) +
          profileItem('Region', record.region) +
          profileItem('Area', record.area) +
          profileItem('Size', record.size) +
          profileItem('Population', record.population ? record.population.toLocaleString() : '—') +
          profileItem('Land Area (sq mi)', record.land_area ? record.land_area.toFixed(1) : '—') +
        '</div>' +
      '</div>' +

      '<div class="profile-section">' +
        '<h3>Financial Metrics (Per Capita)</h3>' +
        '<div class="profile-items">' +
          profileItem('Full Value Per Capita', '$' + fmtNum(record.full_value_per_capita)) +
          profileItem('Taxes Per Capita', '$' + fmtNum(record.taxes_per_capita)) +
          profileItem('Expenditure Per Capita', '$' + fmtNum(record.expenditure_per_capita)) +
          profileItem('Debt Per Capita', '$' + fmtNum(record.debt_per_capita)) +
          profileItem('Effective Tax Rate', (record.effective_property_tax_rate * 100).toFixed(4) + '%') +
        '</div>' +
      '</div>' +

    '</div>' +

    '<div class="profile-chart-box">' +
      '<h3>Financial Overview</h3>' +
      '<canvas id="profileChart" height="80"></canvas>' +
    '</div>';

  renderProfileChart(record);
}

function profileItem(label, value) {
  return '<div class="profile-item">' +
    '<span class="profile-label">' + label + '</span>' +
    '<span class="profile-value">' + (value || '—') + '</span>' +
  '</div>';
}

function renderProfileChart(record) {
  setTimeout(() => {
    const ctx = document.getElementById('profileChart');
    if (!ctx) return;
    if (currentChart) currentChart.destroy();
    currentChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Full Value /capita', 'Taxes /capita', 'Expenditure /capita', 'Debt /capita'],
        datasets: [{
          data: [
            record.full_value_per_capita || 0,
            record.taxes_per_capita || 0,
            record.expenditure_per_capita || 0,
            record.debt_per_capita || 0
          ],
          backgroundColor: [
            'rgba(26,58,92,0.8)',
            'rgba(46,125,50,0.8)',
            'rgba(198,40,40,0.8)',
            'rgba(230,160,0,0.8)'
          ],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Dollars ($)' } }
        }
      }
    });
  }, 100);
}

// ── RENDER TABLE ──
function renderTable(data, title, primaryMetric) {
  document.getElementById('results-section').classList.remove('hidden');
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-count').textContent = data.length + ' records';

  const thead = document.getElementById('results-thead');
  const tbody = document.getElementById('results-tbody');
  const noRes = document.getElementById('no-results');

  if (data.length === 0) {
    thead.innerHTML = '';
    tbody.innerHTML = '';
    noRes.classList.remove('hidden');
    document.getElementById('chart-box').classList.add('hidden');
    return;
  }

  noRes.classList.add('hidden');
  document.getElementById('chart-box').classList.remove('hidden');

  thead.innerHTML = '<tr>' +
    '<th>#</th>' +
    '<th>Municipality</th>' +
    '<th>Type</th>' +
    '<th>County</th>' +
    '<th>Region</th>' +
    '<th>Population</th>' +
    '<th>Expenditure /capita</th>' +
    '<th>Taxes /capita</th>' +
    '<th>Debt /capita</th>' +
    '<th>Eff. Tax Rate</th>' +
    '</tr>';

  tbody.innerHTML = data.map((r, i) =>
    '<tr>' +
    '<td>' + (i + 1) + '</td>' +
    '<td><strong>' + (r.municipality_name || '—') + '</strong></td>' +
    '<td>' + capitalize(r.municipality_type || '—') + '</td>' +
    '<td>' + (r.county || '—') + '</td>' +
    '<td>' + (r.region || '—') + '</td>' +
    '<td>' + (r.population ? r.population.toLocaleString() : '—') + '</td>' +
    '<td>$' + fmtNum(r.expenditure_per_capita) + '</td>' +
    '<td>$' + fmtNum(r.taxes_per_capita) + '</td>' +
    '<td>$' + fmtNum(r.debt_per_capita) + '</td>' +
    '<td>' + (r.effective_property_tax_rate ? (r.effective_property_tax_rate * 100).toFixed(4) + '%' : '—') + '</td>' +
    '</tr>'
  ).join('');
}

// ── RENDER CHART ──
function renderChart(data, field, label, title) {
  if (currentChart) currentChart.destroy();
  document.getElementById('chart-title').textContent = title;
  const labels = data.map(r => r.municipality_name);
  const values = data.map(r => r[field] || 0);
  const ctx = document.getElementById('myChart').getContext('2d');
  currentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label,
        data: values,
        backgroundColor: 'rgba(26,58,92,0.75)',
        borderColor: '#1a3a5c',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: label } },
        x: { ticks: { maxRotation: 45, font: { size: 11 } } }
      }
    }
  });
}

// ── CSV DOWNLOAD ──
function downloadCSV() {
  if (!currentResults.length) return;
  const headers = ['Municipality', 'Type', 'County', 'Region', 'Size', 'Population',
    'Expenditure/capita', 'Taxes/capita', 'Debt/capita', 'Eff.TaxRate'];
  const rows = currentResults.map(r => [
    r.municipality_name, r.municipality_type, r.county, r.region, r.size, r.population,
    r.expenditure_per_capita, r.taxes_per_capita, r.debt_per_capita, r.effective_property_tax_rate
  ]);
  let csv = headers.join(',') + '\n';
  rows.forEach(row => { csv += row.map(v => '"' + (v != null ? v : '') + '"').join(',') + '\n'; });
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'local_gov_results.csv';
  a.click();
}

// ── HELPERS ──
function metricLabel(metric) {
  const labels = {
    expenditure_per_capita: 'Expenditure Per Capita ($)',
    taxes_per_capita: 'Taxes Per Capita ($)',
    debt_per_capita: 'Debt Per Capita ($)',
    effective_property_tax_rate: 'Effective Tax Rate',
    full_value_per_capita: 'Full Value Per Capita ($)'
  };
  return labels[metric] || metric;
}

function fmtNum(val) {
  if (val == null) return '—';
  return parseFloat(val).toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function capitalize(str) {
  if (!str) return '—';
  return str.charAt(0).toUpperCase() + str.slice(1);
}