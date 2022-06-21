const addToDomainObj = (domainObj, domain) => {
  let countBreak = domain.split(' ');
  let domainSubset = countBreak[1].split('.');
  let length = domainSubset.length;

  for (let i = 0; i < length; i++) {
    let subdomain = domainSubset.join('.');
    domainObj[subdomain] = domainObj[subdomain]
      ? parseInt(countBreak[0]) + domainObj[subdomain]
      : parseInt(countBreak[0]);
    domainSubset.shift();
  }

  return domainObj;
};

const convertDomainObjToArr = (domainObj) => {
  let outputArr = [];
  for (property in domainObj) {
    outputArr.push(`${domainObj[property]} ${property}`);
  }

  return outputArr;
};

var subdomainVisits = function (cpdomains) {
  let domainObj = {};

  cpdomains.forEach((element) => {
    addToDomainObj(domainObj, element);
  });

  return convertDomainObjToArr(domainObj);
};

var cpdomains = [
  '900 google.mail.com',
  '50 yahoo.com',
  '1 intel.mail.com',
  '5 wiki.org',
];

console.log(subdomainVisits(cpdomains));
