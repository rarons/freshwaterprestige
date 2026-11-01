(function () {
  var table = document.getElementById('lib-table'); if (!table) return;
  var form = document.querySelector('.lib-filters'); form.hidden = false;
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  var tbody = table.tBodies[0], rows = Array.prototype.slice.call(tbody.rows);
  var fb = document.getElementById('f-bucket'), fs = document.getElementById('f-side'), fq = document.getElementById('f-q'), cnt = document.getElementById('lib-count');
  function apply() {
    var b = fb.value, s = fs.value, q = fq.value.trim().toLowerCase(), n = 0;
    rows.forEach(function (r) {
      var ok = (!b || r.dataset.bucket === b) && (!s || r.dataset.side === s) && (!q || r.textContent.toLowerCase().indexOf(q) > -1);
      r.hidden = !ok; if (ok) n++;
    });
    cnt.textContent = n + (n === 1 ? ' document' : ' documents') + (n === rows.length ? '' : ' of ' + rows.length);
  }
  [fb, fs].forEach(function (el) { el.addEventListener('change', apply); }); fq.addEventListener('input', apply);
  var ths = table.tHead.rows[0].cells;
  Array.prototype.forEach.call(ths, function (th, i) {
    if (th.hasAttribute('data-nosort')) return;
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'lib-sort';
    btn.innerHTML = th.innerHTML + '<span aria-hidden="true" class="lib-arrow"></span>'; th.innerHTML = ''; th.appendChild(btn);
    th.setAttribute('aria-sort', 'none');
    btn.addEventListener('click', function () {
      var dir = th.getAttribute('aria-sort') === 'ascending' ? -1 : 1, num = th.dataset.type === 'num';
      Array.prototype.forEach.call(ths, function (o) { if (o.hasAttribute('aria-sort')) o.setAttribute('aria-sort', 'none'); });
      th.setAttribute('aria-sort', dir === 1 ? 'ascending' : 'descending');
      rows.sort(function (a, b) {
        var x = a.cells[i].textContent.trim(), y = b.cells[i].textContent.trim();
        return dir * (num ? (parseFloat(x) || 0) - (parseFloat(y) || 0) : x.localeCompare(y));
      });
      rows.forEach(function (r) { tbody.appendChild(r); });
    });
  });
})();
