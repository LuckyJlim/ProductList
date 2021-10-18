import React from 'react';
import ProductList from './ProductList';

const items = [
  {"id":1,"price":"$87.68","name":"Amitriptyline Hydrochloride","description":"synergize efficient metrics","imageUrl":"http://dummyimage.com/307x328.bmp/ff4444/ffffff"},
  {"id":2,"price":"$58.53","name":"Zicam","description":"repurpose world-class metrics","imageUrl":"http://dummyimage.com/345x342.jpg/dddddd/000000"},
  {"id":3,"price":"$12.82","name":"Home Care Fluoride","description":"reinvent end-to-end relationships","imageUrl":"http://dummyimage.com/318x336.png/5fa2dd/ffffff"},
  {"id":4,"price":"$55.33","name":"Amlodipine Besylate","description":"optimize visionary channels","imageUrl":"http://dummyimage.com/340x344.png/dddddd/000000"},
  {"id":5,"price":"$30.22","name":"Cyclobenzaprine Hydrochloride","description":"reinvent back-end deliverables","imageUrl":"http://dummyimage.com/324x341.bmp/dddddd/000000"},
  {"id":6,"price":"$72.06","name":"Buspirone HCl","description":"exploit dot-com communities","imageUrl":"http://dummyimage.com/303x315.png/cc0000/ffffff"},
  {"id":7,"price":"$62.89","name":"BSS","description":"mesh compelling paradigms","imageUrl":"http://dummyimage.com/319x343.bmp/ff4444/ffffff"},
  {"id":8,"price":"$39.19","name":"NuvaRing","description":"leverage distributed vortals","imageUrl":"http://dummyimage.com/302x307.jpg/dddddd/000000"},
  {"id":9,"price":"$21.13","name":"TERCONAZOLE","description":"morph compelling infomediaries","imageUrl":"http://dummyimage.com/345x349.jpg/cc0000/ffffff"},
  {"id":10,"price":"$12.92","name":"Rasuvo","description":"implement clicks-and-mortar infrastructures","imageUrl":"http://dummyimage.com/304x322.jpg/ff4444/ffffff"},
  {"id":11,"price":"$78.81","name":"PAXIL","description":"implement back-end deliverables","imageUrl":"http://dummyimage.com/350x305.bmp/dddddd/000000"},
  {"id":12,"price":"$72.76","name":"Clean Choice Alcohol Sanitizer","description":"brand transparent portals","imageUrl":"http://dummyimage.com/329x314.png/ff4444/ffffff"},
  {"id":13,"price":"$67.38","name":"Topiramate","description":"mesh visionary initiatives","imageUrl":"http://dummyimage.com/313x300.bmp/cc0000/ffffff"},
  {"id":14,"price":"$34.68","name":"Lentil","description":"extend B2B ROI","imageUrl":"http://dummyimage.com/310x310.bmp/5fa2dd/ffffff"},
  {"id":15,"price":"$11.83","name":"Aveeno Baby Natural Protection Face","description":"redefine robust solutions","imageUrl":"http://dummyimage.com/328x346.jpg/dddddd/000000"},
  {"id":16,"price":"$58.30","name":"CAPTOPRIL","description":"synthesize seamless methodologies","imageUrl":"http://dummyimage.com/340x330.jpg/cc0000/ffffff"},
  {"id":17,"price":"$58.27","name":"Levora","description":"e-enable robust infomediaries","imageUrl":"http://dummyimage.com/311x327.jpg/dddddd/000000"},
  {"id":18,"price":"$3.08","name":"Duloxetine","description":"envisioneer intuitive e-services","imageUrl":"http://dummyimage.com/334x307.jpg/dddddd/000000"},
  {"id":19,"price":"$44.43","name":"Diltiazem Hydrochloride","description":"incubate clicks-and-mortar synergies","imageUrl":"http://dummyimage.com/305x320.bmp/dddddd/000000"},
  {"id":20,"price":"$35.47","name":"Ciloxan","description":"engage killer interfaces","imageUrl":"http://dummyimage.com/322x330.png/5fa2dd/ffffff"},
  {"id":21,"price":"$18.46","name":"HCG Select Female Vitality Formula","description":"revolutionize back-end bandwidth","imageUrl":"http://dummyimage.com/331x347.png/dddddd/000000"},
  {"id":22,"price":"$44.27","name":"Personal Care Antibacterial Foaming Hand Wash","description":"implement granular relationships","imageUrl":"http://dummyimage.com/345x322.bmp/5fa2dd/ffffff"},
  {"id":23,"price":"$90.88","name":"DEHYDRATED ALCOHOL","description":"monetize distributed systems","imageUrl":"http://dummyimage.com/335x311.jpg/cc0000/ffffff"},
  {"id":24,"price":"$47.70","name":"Kaletra","description":"aggregate front-end relationships","imageUrl":"http://dummyimage.com/305x323.bmp/5fa2dd/ffffff"},
  {"id":25,"price":"$11.02","name":"SILVADENE","description":"synthesize robust action-items","imageUrl":"http://dummyimage.com/341x342.png/ff4444/ffffff"},
  {"id":26,"price":"$49.60","name":"equate sinus","description":"innovate enterprise architectures","imageUrl":"http://dummyimage.com/342x334.bmp/dddddd/000000"},
  {"id":27,"price":"$56.85","name":"CURVULARIA SPICIFERA","description":"evolve value-added vortals","imageUrl":"http://dummyimage.com/321x320.png/ff4444/ffffff"},
  {"id":28,"price":"$80.88","name":"Diurex","description":"target integrated niches","imageUrl":"http://dummyimage.com/317x344.bmp/dddddd/000000"},
  {"id":29,"price":"$77.03","name":"Black Pepper","description":"implement efficient architectures","imageUrl":"http://dummyimage.com/328x314.jpg/5fa2dd/ffffff"},
  {"id":30,"price":"$53.79","name":"Amlodipine and Atorvastatin","description":"reintermediate enterprise channels","imageUrl":"http://dummyimage.com/337x344.jpg/5fa2dd/ffffff"},
  {"id":31,"price":"$36.62","name":"equaline anti itch","description":"deploy sexy bandwidth","imageUrl":"http://dummyimage.com/345x323.bmp/cc0000/ffffff"},
  {"id":32,"price":"$97.74","name":"Isoniazid","description":"embrace vertical synergies","imageUrl":"http://dummyimage.com/341x350.jpg/dddddd/000000"},
  {"id":33,"price":"$70.12","name":"Clarithromycin","description":"recontextualize bleeding-edge e-commerce","imageUrl":"http://dummyimage.com/333x313.bmp/dddddd/000000"},
  {"id":34,"price":"$10.55","name":"equaline nasal decongestant pe","description":"implement compelling communities","imageUrl":"http://dummyimage.com/309x342.png/cc0000/ffffff"},
  {"id":35,"price":"$33.17","name":"good neighbor pharmacy eye itch relief","description":"mesh ubiquitous communities","imageUrl":"http://dummyimage.com/345x301.png/cc0000/ffffff"},
  {"id":36,"price":"$3.26","name":"Ketorolac Tromethamine","description":"engineer holistic paradigms","imageUrl":"http://dummyimage.com/339x348.png/cc0000/ffffff"},
  {"id":37,"price":"$66.36","name":"Buspirone Hydrochloride","description":"repurpose B2C architectures","imageUrl":"http://dummyimage.com/333x319.png/5fa2dd/ffffff"},
  {"id":38,"price":"$21.47","name":"Prednisolone Sodium Phosphate","description":"revolutionize real-time communities","imageUrl":"http://dummyimage.com/345x313.png/dddddd/000000"},
  {"id":39,"price":"$25.40","name":"AZITHROMYCIN","description":"enable dynamic web-readiness","imageUrl":"http://dummyimage.com/343x309.jpg/dddddd/000000"},
  {"id":40,"price":"$50.71","name":"BENLYSTA","description":"e-enable visionary methodologies","imageUrl":"http://dummyimage.com/335x340.jpg/ff4444/ffffff"},
  {"id":41,"price":"$53.01","name":"Alcohol-Free Anticavity","description":"implement extensible channels","imageUrl":"http://dummyimage.com/331x338.png/5fa2dd/ffffff"},
  {"id":42,"price":"$67.09","name":"Headache Relief To Go","description":"integrate web-enabled relationships","imageUrl":"http://dummyimage.com/309x329.png/ff4444/ffffff"},
  {"id":43,"price":"$47.83","name":"Sodium Chloride","description":"innovate front-end metrics","imageUrl":"http://dummyimage.com/337x308.jpg/5fa2dd/ffffff"},
  {"id":44,"price":"$92.62","name":"Glimepiride","description":"grow one-to-one methodologies","imageUrl":"http://dummyimage.com/314x310.jpg/dddddd/000000"},
  {"id":45,"price":"$73.06","name":"Diphenhydramine Hydrochloride","description":"embrace cutting-edge solutions","imageUrl":"http://dummyimage.com/310x344.png/dddddd/000000"},
  {"id":46,"price":"$17.14","name":"AMOXICILLIN","description":"cultivate clicks-and-mortar platforms","imageUrl":"http://dummyimage.com/318x350.bmp/dddddd/000000"},
  {"id":47,"price":"$59.25","name":"Purminerals 4-in-1 Mineral Tinted Moisturizer Broad Spectrum SPF 20 (TAN)","description":"visualize collaborative supply-chains","imageUrl":"http://dummyimage.com/304x338.bmp/cc0000/ffffff"},
  {"id":48,"price":"$60.05","name":"Duloxetine","description":"transform robust methodologies","imageUrl":"http://dummyimage.com/315x313.png/ff4444/ffffff"},
  {"id":49,"price":"$76.65","name":"Calcitriol","description":"productize open-source methodologies","imageUrl":"http://dummyimage.com/321x312.png/ff4444/ffffff"},
  {"id":50,"price":"$60.65","name":"Nicorette","description":"visualize killer users","imageUrl":"http://dummyimage.com/325x305.png/ff4444/ffffff"},
];

export default {
  component: ProductList,
  title: 'ProductList',
};

const Template = args => <ProductList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [...items].slice(0,8),
  maxItem: 8
};

export const LongList = Template.bind({});
LongList.args = {
  items: [...items].slice(0,12),
  maxItem: 12
};