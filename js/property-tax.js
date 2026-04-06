// ── LOCALITY MAP ──
var localityMap = {
  'delmar': { town: 'Bethlehem', county: 'Albany' },
  'elsmere': { town: 'Bethlehem', county: 'Albany' },
  'slingerlands': { town: 'Bethlehem', county: 'Albany' },
  'glenmont': { town: 'Bethlehem', county: 'Albany' },
  'latham': { town: 'Colonie', county: 'Albany' },
  'loudonville': { town: 'Colonie', county: 'Albany' },
  'menands': { town: 'Colonie', county: 'Albany' },
  'voorheesville': { town: 'New Scotland', county: 'Albany' },
  'feura bush': { town: 'New Scotland', county: 'Albany' },
  'guilderland center': { town: 'Guilderland', county: 'Albany' },
  'altamont': { town: 'Guilderland', county: 'Albany' },
  'clifton park': { town: 'Clifton Park', county: 'Saratoga' },
  'halfmoon': { town: 'Halfmoon', county: 'Saratoga' },
  'ballston spa': { town: 'Ballston', county: 'Saratoga' },
  'malta': { town: 'Malta', county: 'Saratoga' },
  'round lake': { town: 'Malta', county: 'Saratoga' },
  'mechanicville': { town: 'Mechanicville', county: 'Saratoga' },
  'glens falls': { town: 'Queensbury', county: 'Warren' },
  'lake george': { town: 'Lake George', county: 'Warren' },
  'lake placid': { town: 'North Elba', county: 'Essex' },
  'saranac lake': { town: 'Harrietstown', county: 'Franklin' },
  'malone': { town: 'Malone', county: 'Franklin' },
  'plattsburgh': { town: 'Plattsburgh', county: 'Clinton' },
  'watertown': { town: 'Watertown', county: 'Jefferson' },
  'massena': { town: 'Massena', county: 'St. Lawrence' },
  'ogdensburg': { town: 'Ogdensburg', county: 'St. Lawrence' },
  'potsdam': { town: 'Potsdam', county: 'St. Lawrence' },
  'liverpool': { town: 'Salina', county: 'Onondaga' },
  'camillus': { town: 'Camillus', county: 'Onondaga' },
  'dewitt': { town: 'De Witt', county: 'Onondaga' },
  'east syracuse': { town: 'De Witt', county: 'Onondaga' },
  'manlius': { town: 'Manlius', county: 'Onondaga' },
  'brighton': { town: 'Brighton', county: 'Monroe' },
  'pittsford': { town: 'Pittsford', county: 'Monroe' },
  'webster': { town: 'Webster', county: 'Monroe' },
  'penfield': { town: 'Penfield', county: 'Monroe' },
  'fairport': { town: 'Perinton', county: 'Monroe' },
  'victor': { town: 'Victor', county: 'Ontario' },
  'canandaigua': { town: 'Canandaigua', county: 'Ontario' },
  'geneva': { town: 'Geneva', county: 'Ontario' },
  'amherst': { town: 'Amherst', county: 'Erie' },
  'cheektowaga': { town: 'Cheektowaga', county: 'Erie' },
  'tonawanda': { town: 'Tonawanda', county: 'Erie' },
  'lancaster': { town: 'Lancaster', county: 'Erie' },
  'west seneca': { town: 'West Seneca', county: 'Erie' },
  'orchard park': { town: 'Orchard Park', county: 'Erie' },
  'hamburg': { town: 'Hamburg', county: 'Erie' },
  'depew': { town: 'Cheektowaga', county: 'Erie' },
  'lockport': { town: 'Lockport', county: 'Niagara' },
  'niagara falls': { town: 'Niagara Falls', county: 'Niagara' },
  'vestal': { town: 'Vestal', county: 'Broome' },
  'endicott': { town: 'Union', county: 'Broome' },
  'johnson city': { town: 'Johnson City', county: 'Broome' },
  'endwell': { town: 'Union', county: 'Broome' },
  'corning': { town: 'Corning', county: 'Steuben' },
  'hornell': { town: 'Hornellsville', county: 'Steuben' },
  'elmira': { town: 'Elmira', county: 'Chemung' },
  'big flats': { town: 'Big Flats', county: 'Chemung' },
  'ithaca': { town: 'Ithaca', county: 'Tompkins' },
  'cortland': { town: 'Cortland', county: 'Cortland' },
  'auburn': { town: 'Auburn', county: 'Cayuga' },
  'poughkeepsie': { town: 'Poughkeepsie', county: 'Dutchess' },
  'hyde park': { town: 'Hyde Park', county: 'Dutchess' },
  'fishkill': { town: 'Fishkill', county: 'Dutchess' },
  'newburgh': { town: 'Newburgh', county: 'Orange' },
  'middletown': { town: 'Middletown', county: 'Orange' },
  'monroe': { town: 'Monroe', county: 'Orange' },
  'kingston': { town: 'Kingston', county: 'Ulster' },
  'new paltz': { town: 'New Paltz', county: 'Ulster' },
  'woodstock': { town: 'Woodstock', county: 'Ulster' },
  'spring valley': { town: 'Ramapo', county: 'Rockland' },
  'suffern': { town: 'Ramapo', county: 'Rockland' },
  'nanuet': { town: 'Clarkstown', county: 'Rockland' },
  'new city': { town: 'Clarkstown', county: 'Rockland' },
  'white plains': { town: 'White Plains', county: 'Westchester' },
  'yonkers': { town: 'Yonkers', county: 'Westchester' },
  'mount vernon': { town: 'Mount Vernon', county: 'Westchester' },
  'new rochelle': { town: 'New Rochelle', county: 'Westchester' },
  'scarsdale': { town: 'Scarsdale', county: 'Westchester' },
  'tarrytown': { town: 'Greenburgh', county: 'Westchester' },
  'port chester': { town: 'Rye', county: 'Westchester' },
  'huntington': { town: 'Huntington', county: 'Suffolk' },
  'babylon': { town: 'Babylon', county: 'Suffolk' },
  'islip': { town: 'Islip', county: 'Suffolk' },
  'brookhaven': { town: 'Brookhaven', county: 'Suffolk' },
  'smithtown': { town: 'Smithtown', county: 'Suffolk' },
  'hempstead': { town: 'Hempstead', county: 'Nassau' },
  'north hempstead': { town: 'North Hempstead', county: 'Nassau' },
  'oyster bay': { town: 'Oyster Bay', county: 'Nassau' }
};

// ── GLOBAL VARIABLES ──
var taxData = [];
var sdData = [];
var compareItems = [];
var compareChart = null;
var rankChart = null;
var currentSDOptions = [];
var currentTaxRecord = null;
var autocompleteTimeout = null;
var selectedAutocompleteIndex = -1;

// ── LOAD DATA ──
Promise.all([
  fetch('data/property_tax.json').then(function(r) { return r.json(); }),
  fetch('data/school_districts.json').then(function(r) { return r.json(); })
]).then(function(results) {
  taxData = results[0];
  sdData = results[1];
  populateCompareFilters();
  populateRankCounties();
}).catch(function(err) { console.error('Error loading data:', err); });

// ── TOGGLE RANK MODE ──
function toggleRankMode() {
  var main = document.getElementById('mainContent');
  var rank = document.getElementById('rankContent');
  var btn = document.getElementById('rankToggleBtn');
  if (rank.classList.contains('hidden')) {
    main.classList.add('hidden');
    rank.classList.remove('hidden');
    btn.textContent = 'Back to Search';
  } else {
    rank.classList.add('hidden');
    main.classList.remove('hidden');
    btn.textContent = 'Rank Municipalities';
  }
}

// ── TOGGLE HELP ──
function toggleHelp() {
  document.getElementById('helpGuide').classList.toggle('hidden');
}

// ── AUTOCOMPLETE ──
function handleAddressInput() {
  clearTimeout(autocompleteTimeout);
  var input = document.getElementById('address-input').value.trim();
  if (input.length < 3) {
    document.getElementById('autocomplete-list').classList.add('hidden');
    return;
  }
  autocompleteTimeout = setTimeout(function() {
    fetchAddressSuggestions(input);
  }, 400);
}

function fetchAddressSuggestions(query) {
  var encoded = encodeURIComponent(query + ', New York, USA');
  var url = 'https://nominatim.openstreetmap.org/search?q=' + encoded +
    '&format=json&addressdetails=1&limit=6&countrycodes=us';
  fetch(url, { headers: { 'Accept-Language': 'en' } })
    .then(function(r) { return r.json(); })
    .then(function(results) {
      var nyResults = results.filter(function(r) {
        return r.address && r.address.state === 'New York';
      });
      showAutocompleteSuggestions(nyResults);
    })
    .catch(function() {
      document.getElementById('autocomplete-list').classList.add('hidden');
    });
}

function showAutocompleteSuggestions(results) {
  var list = document.getElementById('autocomplete-list');
  if (!results || results.length === 0) {
    list.classList.add('hidden');
    return;
  }
  list.innerHTML = '';
  selectedAutocompleteIndex = -1;
  results.forEach(function(r) {
    var div = document.createElement('div');
    div.className = 'autocomplete-item';
    div.textContent = r.display_name;
    div.onclick = function() { selectSuggestion(r); };
    list.appendChild(div);
  });
  list.classList.remove('hidden');
}

function selectSuggestion(result) {
  document.getElementById('address-input').value = result.display_name;
  document.getElementById('autocomplete-list').classList.add('hidden');
  processAddressResult(result.address, result.display_name);
}

function handleAddressKeydown(event) {
  var list = document.getElementById('autocomplete-list');
  var items = list.querySelectorAll('.autocomplete-item');
  if (event.key === 'ArrowDown') {
    selectedAutocompleteIndex = Math.min(selectedAutocompleteIndex + 1, items.length - 1);
    updateActiveItem(items);
    event.preventDefault();
  } else if (event.key === 'ArrowUp') {
    selectedAutocompleteIndex = Math.max(selectedAutocompleteIndex - 1, -1);
    updateActiveItem(items);
    event.preventDefault();
  } else if (event.key === 'Enter') {
    if (selectedAutocompleteIndex >= 0 && items[selectedAutocompleteIndex]) {
      items[selectedAutocompleteIndex].click();
    } else {
      searchByAddress();
    }
    event.preventDefault();
  } else if (event.key === 'Escape') {
    list.classList.add('hidden');
  }
}

function updateActiveItem(items) {
  items.forEach(function(item, i) {
    item.classList.toggle('active', i === selectedAutocompleteIndex);
  });
}

// ── ADDRESS SEARCH ──
function searchByAddress() {
  var input = document.getElementById('address-input').value.trim();
  if (!input) { showAddressStatus('Please enter an address.', 'error'); return; }
  if (taxData.length === 0) { showAddressStatus('Data is still loading, please try again.', 'error'); return; }

  document.getElementById('autocomplete-list').classList.add('hidden');
  showAddressStatus('Searching...', 'loading');

  var encoded = encodeURIComponent(input + ', New York, USA');
  var url = 'https://nominatim.openstreetmap.org/search?q=' + encoded +
    '&format=json&addressdetails=1&limit=1&countrycodes=us';

  fetch(url, { headers: { 'Accept-Language': 'en' } })
    .then(function(r) { return r.json(); })
    .then(function(results) {
      if (!results || results.length === 0) {
        fallbackSearch(input);
        return;
      }
      var addr = results[0].address;
      if (!addr || addr.state !== 'New York') {
        fallbackSearch(input);
        return;
      }
      processAddressResult(addr, results[0].display_name);
    })
    .catch(function() { fallbackSearch(input); });
}

function processAddressResult(addr, displayName) {
  var city = addr.city || addr.town || addr.village || addr.hamlet || addr.county_division || '';
  var county = (addr.county || '').replace(' County', '').trim();
  var suburb = addr.suburb || addr.neighbourhood || '';

  // Check locality map for hamlet/suburb names first
  var checkTerms = [city.toLowerCase(), suburb.toLowerCase()];
  for (var t = 0; t < checkTerms.length; t++) {
    var term = checkTerms[t];
    if (term && localityMap[term]) {
      var mapped = localityMap[term];
      for (var i = 0; i < taxData.length; i++) {
        var r = taxData[i];
        var name = (r.municipality_name || '').toLowerCase()
          .replace('city of ', '').replace('town of ', '').trim();
        if (name === mapped.town.toLowerCase() &&
            (r.county || '').toLowerCase() === mapped.county.toLowerCase()) {
          showAddressStatus('', 'hidden');
          currentTaxRecord = r;
          displayAddressResults(r, displayName, city, r.county);
          return;
        }
      }
    }
  }

  if (!city && !county) { fallbackSearch(displayName); return; }

  var matches = findTaxMatches(city, county);
  if (matches.length === 0) { fallbackSearch(displayName); return; }

  showAddressStatus('', 'hidden');
  currentTaxRecord = matches[0];
  displayAddressResults(matches[0], displayName, city, county);
}

function findTaxMatches(city, county) {
  var results = [];
  var cityLower = city.toLowerCase();
  var countyLower = county.toLowerCase();

  taxData.forEach(function(r) {
    var name = (r.municipality_name || '').toLowerCase()
      .replace('city of ', '').replace('town of ', '').trim();
    var rCounty = (r.county || '').toLowerCase();
    var nameMatch = name === cityLower || name.includes(cityLower) || cityLower.includes(name);
    var countyMatch = !county || rCounty === countyLower || rCounty.includes(countyLower);
    if (nameMatch && countyMatch) results.push(r);
  });

  if (results.length === 0 && city) {
    taxData.forEach(function(r) {
      var name = (r.municipality_name || '').toLowerCase()
        .replace('city of ', '').replace('town of ', '').trim();
      if (name === cityLower || name.includes(cityLower)) results.push(r);
    });
  }
  return results;
}

function fallbackSearch(input) {
  var parts = input.split(',').map(function(p) { return p.trim(); });
  var searchTerms = [];

  parts.forEach(function(part) {
    var cleaned = part.toLowerCase()
      .replace(/\bny\b/gi, '')
      .replace(/\bnew york\b/gi, '')
      .replace(/\d{5}/g, '')
      .replace(/\bst\b|\bave\b|\bblvd\b|\bdr\b|\brd\b|\bln\b|\bct\b|\bpl\b|\bway\b/gi, '')
      .replace(/\d+/g, '')
      .replace(/united states/gi, '')
      .trim();
    if (cleaned.length > 1) searchTerms.push(cleaned);
  });

  // Check locality map first
  for (var t = 0; t < searchTerms.length; t++) {
    var term = searchTerms[t];
    if (localityMap[term]) {
      var mapped = localityMap[term];
      for (var i = 0; i < taxData.length; i++) {
        var r = taxData[i];
        var name = (r.municipality_name || '').toLowerCase()
          .replace('city of ', '').replace('town of ', '').trim();
        if (name === mapped.town.toLowerCase() &&
            (r.county || '').toLowerCase() === mapped.county.toLowerCase()) {
          showAddressStatus('', 'hidden');
          currentTaxRecord = r;
          displayAddressResults(r, input, term, r.county);
          return;
        }
      }
    }
  }

  // Try exact match
  for (var t = 0; t < searchTerms.length; t++) {
    var term = searchTerms[t];
    for (var i = 0; i < taxData.length; i++) {
      var name = (taxData[i].municipality_name || '').toLowerCase()
        .replace('city of ', '').replace('town of ', '').trim();
      if (name === term) {
        showAddressStatus('', 'hidden');
        currentTaxRecord = taxData[i];
        displayAddressResults(taxData[i], input, term, taxData[i].county);
        return;
      }
    }
  }

  // Try starts with match
  for (var t = 0; t < searchTerms.length; t++) {
    var term = searchTerms[t];
    if (term.length < 4) continue;
    for (var i = 0; i < taxData.length; i++) {
      var name = (taxData[i].municipality_name || '').toLowerCase()
        .replace('city of ', '').replace('town of ', '').trim();
      if (name.startsWith(term)) {
        showAddressStatus('', 'hidden');
        currentTaxRecord = taxData[i];
        displayAddressResults(taxData[i], input, term, taxData[i].county);
        return;
      }
    }
  }

  showAddressStatus('No municipality found for "' + input + '". Try entering just the town name, e.g. "Bethlehem, NY".', 'error');
}

// ── DISPLAY RESULTS ──
function displayAddressResults(record, displayName, city, county) {
  document.getElementById('address-found-text').textContent =
    record.municipality_name + ', ' + record.county + ' County, NY';

  var municipalityName = record.municipality_name || '';
  var matchingSDs = sdData.filter(function(sd) {
    return (sd['Company Name - RPT Location, City/Town'] || '').toLowerCase() ===
      municipalityName.toLowerCase();
  });

  currentSDOptions = matchingSDs;

  var sdBox = document.getElementById('sd-filter-box');
  var sdSelect = document.getElementById('sd-select');

  if (matchingSDs.length > 1) {
    sdSelect.innerHTML = '';
    matchingSDs.forEach(function(sd, i) {
      var pct = sd['Percent of City/Town in School District']
        ? (sd['Percent of City/Town in School District'] * 100).toFixed(1) : '?';
      var opt = document.createElement('option');
      opt.value = i;
      opt.textContent = (sd['School Name - RPT Authority'] || 'Unknown SD') +
        ' (' + pct + '% of town)';
      sdSelect.appendChild(opt);
    });
    sdBox.classList.remove('hidden');
  } else {
    sdBox.classList.add('hidden');
  }

  renderRateCards(record, matchingSDs.length > 0 ? matchingSDs[0] : null);
  document.getElementById('address-bill-result').classList.add('hidden');
  document.getElementById('address-propval').value = '';
  document.getElementById('address-result').classList.remove('hidden');
}

function updateSDRates() {
  var idx = parseInt(document.getElementById('sd-select').value);
  var sd = currentSDOptions[idx];
  renderRateCards(currentTaxRecord, sd);
  document.getElementById('address-bill-result').classList.add('hidden');
}

function renderRateCards(record, sd) {
  var sdRate = sd
    ? (sd['Full Value Tax Rate (Levy per $1,000 Full Value)'] || 0)
    : (record.sd_full_value_tax_rate || 0);
  var sdName = sd
    ? (sd['School Name - RPT Authority'] || 'School District')
    : 'School District';
  var countyRate = record.county_full_value_tax_rate || 0;
  var muniRate = record.municipality_full_value_tax_rate || 0;
  var villageRate = record.village_full_value_tax_rate || 0;
  var totalRate = sdRate + countyRate + muniRate + (villageRate || 0);

  var html = '<div class="rate-grid">';
  html += rateCard('School District', sdName, sdRate, false);
  html += rateCard('County', record.county + ' County', countyRate, false);
  html += rateCard('Municipality', record.municipality_name, muniRate, false);
  if (villageRate) {
    html += rateCard('Village', 'Village Tax', villageRate, false);
  }
  html += rateCard('Total Combined Rate', 'All Taxing Jurisdictions', totalRate, true);
  html += '</div>';
  html += '<p class="rate-note" style="margin-top:8px;">Rates shown for Tax Year 2024 · Based on assessed full value</p>';

  document.getElementById('address-result-rates').innerHTML = html;

  window._currentRates = {
    sdRate: sdRate,
    sdName: sdName,
    countyRate: countyRate,
    muniRate: muniRate,
    villageRate: villageRate,
    totalRate: totalRate,
    record: record
  };
}

function rateCard(entityType, entityName, rate, isTotal) {
  var pct = (rate / 10).toFixed(2);
  var per1000 = rate.toFixed(4);
  return '<div class="rate-card' + (isTotal ? ' highlight' : '') + '">' +
    '<div class="rate-card-entity">' + entityType + '</div>' +
    '<div class="rate-card-name">' + entityName + '</div>' +
    '<div class="rate-card-pct">' + pct + '%</div>' +
    '<div class="rate-card-per1000">' + per1000 + ' per $1,000 assessed value</div>' +
    '</div>';
}

// ── CALCULATE BILL ──
function calcAddressBill() {
  var val = parseFloat(document.getElementById('address-propval').value);
  if (!val || val <= 0) { alert('Please enter a valid assessed property value.'); return; }
  if (!window._currentRates) { alert('Please search for an address first.'); return; }

  var r = window._currentRates;
  var sdBill = Math.round((r.sdRate / 1000) * val);
  var countyBill = Math.round((r.countyRate / 1000) * val);
  var muniBill = Math.round((r.muniRate / 1000) * val);
  var villageBill = r.villageRate ? Math.round((r.villageRate / 1000) * val) : 0;
  var totalBill = sdBill + countyBill + muniBill + villageBill;

  var html = '<div class="bill-breakdown">';
  html += '<h4>Estimated Annual Property Tax Bill</h4>';
  html += '<div class="bill-breakdown-items">';
  html += '<div class="bill-breakdown-item"><span class="item-name">' +
    r.sdName + '</span><span class="item-amount">$' +
    sdBill.toLocaleString('en-US') + '</span></div>';
  html += '<div class="bill-breakdown-item"><span class="item-name">' +
    r.record.county + ' County Tax</span><span class="item-amount">$' +
    countyBill.toLocaleString('en-US') + '</span></div>';
  html += '<div class="bill-breakdown-item"><span class="item-name">' +
    r.record.municipality_name + ' Municipal Tax</span><span class="item-amount">$' +
    muniBill.toLocaleString('en-US') + '</span></div>';
  if (villageBill) {
    html += '<div class="bill-breakdown-item"><span class="item-name">Village Tax</span>' +
      '<span class="item-amount">$' + villageBill.toLocaleString('en-US') + '</span></div>';
  }
  html += '</div>';
  html += '<div class="bill-breakdown-total"><span>Total Estimated Annual Tax</span>' +
    '<span>$' + totalBill.toLocaleString('en-US') + '</span></div>';
  html += '</div>';

  var billEl = document.getElementById('address-bill-result');
  billEl.innerHTML = html;
  billEl.classList.remove('hidden');
}

// ── COMPARE ──
function populateCompareFilters() {
  var county = document.getElementById('compare-county').value;
  var cities = [], towns = [], villages = [], sds = [];

  taxData.forEach(function(r) {
    if (county && r.county !== county) return;
    if (r.municipality_type === 'city') cities.push(r.municipality_name);
    else if (r.municipality_type === 'town') towns.push(r.municipality_name);
    else if (r.municipality_type === 'village') villages.push(r.municipality_name);
  });

  sdData.forEach(function(r) {
    var sdName = r['School Name - RPT Authority'];
    var sdCounty = r['Primary County of School - RPT Authority'];
    if (county && sdCounty !== county) return;
    if (sdName && sds.indexOf(sdName) === -1) sds.push(sdName);
  });

  // Populate county dropdown only once
  var cSel = document.getElementById('compare-county');
  if (cSel.options.length <= 1) {
    var counties = [];
    taxData.forEach(function(r) {
      if (r.county && counties.indexOf(r.county) === -1) counties.push(r.county);
    });
    counties.sort();
    cSel.innerHTML = '<option value="">— All Counties —</option>';
    counties.forEach(function(c) {
      cSel.innerHTML += '<option value="' + c + '">' + c + '</option>';
    });
  }

  cities = uniqueSort(cities);
  towns = uniqueSort(towns);
  villages = uniqueSort(villages);
  sds = uniqueSort(sds);

  fillSelect('compare-city', cities, '— Select City —');
  fillSelect('compare-town', towns, '— Select Town —');
  fillSelect('compare-village', villages, '— Select Village —');
  fillSelect('compare-sd', sds, '— Select School District —');
}

function uniqueSort(arr) {
  var seen = {};
  var result = [];
  arr.forEach(function(item) {
    if (!seen[item]) { seen[item] = true; result.push(item); }
  });
  return result.sort();
}

function fillSelect(id, items, placeholder) {
  var sel = document.getElementById(id);
  sel.innerHTML = '<option value="">' + placeholder + '</option>';
  items.forEach(function(item) {
    sel.innerHTML += '<option value="' + item + '">' + item + '</option>';
  });
}

function clearOtherCompareFilters(selected) {
  if (selected !== 'city') document.getElementById('compare-city').value = '';
  if (selected !== 'town') document.getElementById('compare-town').value = '';
  if (selected !== 'village') document.getElementById('compare-village').value = '';
  if (selected !== 'sd') document.getElementById('compare-sd').value = '';
}

function addToCompare() {
  var county = document.getElementById('compare-county').value;
  var city = document.getElementById('compare-city').value;
  var town = document.getElementById('compare-town').value;
  var village = document.getElementById('compare-village').value;
  var sd = document.getElementById('compare-sd').value;

  var name = city || town || village || sd;
  var type = city ? 'city' : town ? 'town' : village ? 'village' : sd ? 'sd' : '';

  if (!name) { alert('Please select a location to add.'); return; }
  if (compareItems.length >= 10) { alert('Maximum 10 locations.'); return; }

  var key = type + '|' + name + '|' + county;
  var alreadyExists = false;
  compareItems.forEach(function(i) { if (i.key === key) alreadyExists = true; });
  if (alreadyExists) { alert('Already in list.'); return; }

  var record = null;
  if (type === 'sd') {
    var sdRecord = null;
    for (var i = 0; i < sdData.length; i++) {
      if (sdData[i]['School Name - RPT Authority'] === name &&
          (!county || sdData[i]['Primary County of School - RPT Authority'] === county)) {
        sdRecord = sdData[i];
        break;
      }
    }
    if (sdRecord) {
      record = {
        name: name,
        type: 'sd',
        county: sdRecord['Primary County of School - RPT Authority'],
        rate: sdRecord['Full Value Tax Rate (Levy per $1,000 Full Value)']
      };
    }
  } else {
    var taxRecord = null;
    for (var i = 0; i < taxData.length; i++) {
      if (taxData[i].municipality_name === name &&
          taxData[i].municipality_type === type &&
          (!county || taxData[i].county === county)) {
        taxRecord = taxData[i];
        break;
      }
    }
    if (taxRecord) {
      record = {
        name: name,
        type: type,
        county: taxRecord.county,
        rate: taxRecord.total_tax_rate
      };
    }
  }

  if (!record) { alert('Could not find data for this selection.'); return; }
  compareItems.push({ key: key, name: name, type: type, county: record.county, rate: record.rate });
  renderCompareTags();
}

function renderCompareTags() {
  var box = document.getElementById('compare-list-box');
  var tags = document.getElementById('compare-tags');
  if (compareItems.length === 0) { box.classList.add('hidden'); return; }
  box.classList.remove('hidden');
  var html = '';
  compareItems.forEach(function(item, i) {
    html += '<span class="compare-tag">' + item.name + ' (' + item.county + ')' +
      ' <button onclick="removeCompare(' + i + ')">X</button></span>';
  });
  tags.innerHTML = html;
}

function removeCompare(i) {
  compareItems.splice(i, 1);
  renderCompareTags();
}

function runCompare() {
  if (compareItems.length < 2) { alert('Please add at least 2 locations to compare.'); return; }

  document.getElementById('compare-results').classList.remove('hidden');
  document.getElementById('compare-results-title').textContent = 'Comparison Results';
  document.getElementById('compare-results-count').textContent = compareItems.length + ' locations';

  var thead = document.getElementById('compare-thead');
  var tbody = document.getElementById('compare-tbody');

  thead.innerHTML = '<tr><th>#</th><th>Location</th><th>Type</th><th>County</th>' +
    '<th>Total Rate (%)</th><th>Total Rate (per $1,000)</th></tr>';

  var rows = '';
  compareItems.forEach(function(item, i) {
    var pct = item.rate ? (item.rate / 10).toFixed(2) + '%' : '--';
    var per1000 = item.rate ? item.rate.toFixed(4) : '--';
    rows += '<tr><td>' + (i + 1) + '</td><td><strong>' + item.name + '</strong></td>' +
      '<td>' + capitalize(item.type) + '</td><td>' + item.county + '</td>' +
      '<td>' + pct + '</td><td>' + per1000 + '</td></tr>';
  });
  tbody.innerHTML = rows;

  renderCompareChart();
}

function renderCompareChart() {
  if (compareChart) compareChart.destroy();
  var labels = compareItems.map(function(i) { return i.name; });
  var values = compareItems.map(function(i) {
    return i.rate ? parseFloat((i.rate / 10).toFixed(4)) : 0;
  });
  var ctx = document.getElementById('compareChart').getContext('2d');
  compareChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Tax Rate (%)',
        data: values,
        backgroundColor: 'rgba(26,58,92,0.75)',
        borderColor: '#1a3a5c',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) { return ' ' + ctx.parsed.y.toFixed(4) + '%'; }
          }
        }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Tax Rate (%)' } },
        x: { ticks: { maxRotation: 45, font: { size: 11 } } }
      }
    }
  });
}

// ── RANK ──
function populateRankCounties() {
  var counties = [];
  taxData.forEach(function(r) {
    if (r.county && counties.indexOf(r.county) === -1) counties.push(r.county);
  });
  counties.sort();
  var sel = document.getElementById('rank-county');
  sel.innerHTML = '';
  counties.forEach(function(c) {
    sel.innerHTML += '<option value="' + c + '">' + c + '</option>';
  });
}

function runRank() {
  var countySelect = document.getElementById('rank-county');
  var selectedCounties = [];
  for (var i = 0; i < countySelect.options.length; i++) {
    if (countySelect.options[i].selected) selectedCounties.push(countySelect.options[i].value);
  }

  var type = document.getElementById('rank-type').value;
  var limitVal = document.getElementById('rank-limit').value;
  var order = document.getElementById('rank-order').value;
  var propVal = parseFloat(document.getElementById('rank-propval').value) || null;

  var results = [];

  if (type === 'sd') {
    var sdSeen = {};
    sdData.forEach(function(r) {
      var name = r['School Name - RPT Authority'];
      var county = r['Primary County of School - RPT Authority'];
      var rate = r['Full Value Tax Rate (Levy per $1,000 Full Value)'];
      if (!name || !rate) return;
      if (selectedCounties.length > 0 && selectedCounties.indexOf(county) === -1) return;
      if (!sdSeen[name] || sdSeen[name].rate < rate) {
        sdSeen[name] = { name: name, type: 'School District', county: county, rate: rate };
      }
    });
    results = Object.values(sdSeen);
  } else {
    taxData.forEach(function(r) {
      if (r.municipality_type !== type) return;
      if (selectedCounties.length > 0 && selectedCounties.indexOf(r.county) === -1) return;
      if (r.total_tax_rate == null) return;
      results.push({
        name: r.municipality_name,
        type: capitalize(type),
        county: r.county,
        rate: r.total_tax_rate
      });
    });
  }

  results.sort(function(a, b) {
    return order === 'asc' ? a.rate - b.rate : b.rate - a.rate;
  });
  if (limitVal !== 'all') results = results.slice(0, parseInt(limitVal));

  document.getElementById('rank-results').classList.remove('hidden');
  document.getElementById('rank-results-title').textContent =
    'Ranked ' + capitalize(type) + 's by Tax Rate';
  document.getElementById('rank-results-count').textContent = results.length + ' results';

  var extraCol = propVal ? '<th>Est. Tax Bill</th>' : '';
  document.getElementById('rank-thead').innerHTML =
    '<tr><th>#</th><th>Name</th><th>Type</th><th>County</th>' +
    '<th>Rate (%)</th><th>Rate (per $1,000)</th>' + extraCol + '</tr>';

  var rows = '';
  results.forEach(function(r, i) {
    var pct = (r.rate / 10).toFixed(2) + '%';
    var per1000 = r.rate.toFixed(4);
    var bill = propVal
      ? '<td>$' + Math.round((r.rate / 1000) * propVal).toLocaleString('en-US') + '</td>'
      : '';
    rows += '<tr><td>' + (i + 1) + '</td><td><strong>' + r.name + '</strong></td>' +
      '<td>' + r.type + '</td><td>' + r.county + '</td>' +
      '<td>' + pct + '</td><td>' + per1000 + '</td>' + bill + '</tr>';
  });
  document.getElementById('rank-tbody').innerHTML = rows;

  renderRankChart(results.slice(0, 20));
}

function renderRankChart(results) {
  if (rankChart) rankChart.destroy();
  var labels = results.map(function(r) { return r.name; });
  var values = results.map(function(r) {
    return parseFloat((r.rate / 10).toFixed(4));
  });
  var ctx = document.getElementById('rankChart').getContext('2d');
  rankChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Tax Rate (%)',
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
        y: { beginAtZero: true, title: { display: true, text: 'Tax Rate (%)' } },
        x: { ticks: { maxRotation: 45, font: { size: 11 } } }
      }
    }
  });
}

// ── STATUS ──
function showAddressStatus(msg, type) {
  var el = document.getElementById('address-status');
  if (!msg || type === 'hidden') { el.classList.add('hidden'); return; }
  el.textContent = msg;
  el.className = 'address-status ' + type;
  el.classList.remove('hidden');
}

// ── HELPERS ──
function fmt(val) {
  if (val == null) return '--';
  return parseFloat(val).toFixed(4);
}

function capitalize(str) {
  if (!str) return '--';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Close autocomplete when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.autocomplete-wrapper')) {
    var list = document.getElementById('autocomplete-list');
    if (list) list.classList.add('hidden');
  }
});
