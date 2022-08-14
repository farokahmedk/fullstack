const links = [
  { name: "Facebook", url: "http://facebook.com" },
  { name: "YouTube", url: "http://youtube.com" },
  { name: "LinkedIn", url: "http://linkedin.com" },
  { name: "GitHub", url: "http://github.com" },
  { name: "Twitter", url: "http://twitter.com" },
];

let template = `<ul>{{links}}</ul>`;

const linkList = links.reduce((acc, link) => {
  acc += `<li><a href='${link.url}'>${link.name}</a></li>`;
  return acc;
}, "");

// console.log(linkList);

template = template.replace("{{links}}", linkList);

// console.log(template);
