(function (d) {
  const tabs = Array.prototype.slice.apply(d.querySelectorAll('.tab'));
  const panels = Array.prototype.slice.apply(d.querySelectorAll('.tab-panel'));
  panels[0].classList.add('active');
  d.getElementById('tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('tab')) {
      let i = tabs.indexOf(e.target);
      tabs.map((tab) => tab.classList.remove('active'));
      tabs[i].classList.add('active');
      panels.map((panel) => panel.classList.remove('active'));
      panels[i].classList.add('active');
    }
  });
})(document);
