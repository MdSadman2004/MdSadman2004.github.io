'use strict';
// Progressive enhancement: images, video controls and every repository remain usable without JS.
const scenes = {
  garden: ['docs/showcase/parable-garden.jpg', 'The garden — somewhere unmeasured.', 'Actual Parable garden environment with a pale tree, bench and narrative overlay'],
  observatory: ['docs/showcase/parable-observatory.jpg', 'The observatory — an unwritten sky.', 'Actual Parable observatory environment with an orrery and narrative overlay'],
  office: ['docs/showcase/parable-office.jpg', 'The office — where the file begins.', 'Actual Parable office environment with cabinets, a desk and narrative overlay']
};
const image = document.querySelector('#scene-image');
const caption = document.querySelector('#scene-caption');
for (const button of document.querySelectorAll('[data-scene]')) {
  button.addEventListener('click', () => {
    const [src, text, alt] = scenes[button.dataset.scene];
    image.src = src;
    image.alt = alt;
    caption.textContent = text;
    for (const peer of document.querySelectorAll('[data-scene]')) {
      const active = peer === button;
      peer.classList.toggle('active', active);
      peer.setAttribute('aria-pressed', String(active));
    }
  });
}
const search = document.querySelector('#project-search');
const rows = [...document.querySelectorAll('.repo-row')];
let category = 'All';
function filterProjects() {
  const query = search.value.toLocaleLowerCase().trim();
  let visible = 0;
  for (const row of rows) {
    row.hidden = !((category === 'All' || row.dataset.category === category) && row.textContent.toLocaleLowerCase().includes(query));
    if (!row.hidden) visible += 1;
  }
  document.querySelector('#result-count').textContent = `${visible} of ${rows.length} projects`;
  document.querySelector('#no-results').hidden = visible !== 0;
}
search.addEventListener('input', filterProjects);
for (const button of document.querySelectorAll('[data-filter]')) {
  button.addEventListener('click', () => {
    category = button.dataset.filter;
    for (const peer of document.querySelectorAll('[data-filter]')) {
      const active = peer === button;
      peer.classList.toggle('active', active);
      peer.setAttribute('aria-pressed', String(active));
    }
    filterProjects();
  });
}
// Play is deliberate. No unsolicited motion, audio, or competition between clips.
const videos = [...document.querySelectorAll('video')];
for (const video of videos) video.addEventListener('play', () => {
  for (const other of videos) if (other !== video) other.pause();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) videos.forEach(video => video.pause());
});
