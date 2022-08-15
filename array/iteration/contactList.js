/**
 * @title: Contact List
 */

const contactList = [
  { name: "Sbfan", phone: "1-903-490-5223" },
  { name: "Uyqxl", phone: "1-582-372-8969" },
  { name: "Naecn", phone: "1-850-135-9931" },
  { name: "Iajgx", phone: "1-343-403-5342" },
  { name: "Ypnnr", phone: "1-213-311-6653" },
  { name: "Cffat", phone: "1-223-204-2881" },
  { name: "Bkckt", phone: "1-843-608-7256" },
  { name: "Glfbn", phone: "1-809-497-4003" },
  { name: "Lzdmr", phone: "1-805-585-1779" },
  { name: "Hyyhh", phone: "1-478-289-7360" },
  { name: "Ghcfe", phone: "1-596-502-1767" },
  { name: "Cbozr", phone: "1-287-648-6310" },
  { name: "Drcpp", phone: "1-337-731-3496" },
  { name: "Toyse", phone: "1-512-819-8944" },
  { name: "Gcbio", phone: "1-302-219-4911" },
  { name: "Sxrwi", phone: "1-776-608-4120" },
  { name: "Yirav", phone: "1-539-425-2026" },
  { name: "Lmakn", phone: "1-625-979-2293" },
  { name: "Qlmub", phone: "1-821-791-7278" },
  { name: "Vrhro", phone: "1-363-665-1321" },
  { name: "Pdklz", phone: "1-874-250-8498" },
  { name: "Sxrjs", phone: "1-774-420-6524" },
  { name: "Zhmcl", phone: "1-324-303-1361" },
  { name: "Xfldp", phone: "1-648-224-2558" },
  { name: "Lsiub", phone: "1-117-340-5638" },
  { name: "Kubvu", phone: "1-594-808-5240" },
  { name: "Rdlqd", phone: "1-434-601-9807" },
  { name: "Lvrpw", phone: "1-757-429-9470" },
  { name: "Yuhvc", phone: "1-774-407-9399" },
  { name: "Vjzvp", phone: "1-653-722-3184" },
  { name: "Fzhqx", phone: "1-642-496-6351" },
  { name: "Fwkah", phone: "1-147-971-4406" },
  { name: "Aylyk", phone: "1-579-982-9755" },
  { name: "Svetw", phone: "1-968-567-3252" },
  { name: "Fhlzj", phone: "1-993-281-5998" },
  { name: "Ovpvv", phone: "1-562-229-9707" },
  { name: "Bvgiu", phone: "1-368-966-5306" },
  { name: "Hunyr", phone: "1-933-376-1119" },
  { name: "Pajku", phone: "1-338-302-7020" },
  { name: "Adjhn", phone: "1-571-776-3766" },
  { name: "Uzbcj", phone: "1-656-657-6752" },
  { name: "Cnyzy", phone: "1-818-985-4738" },
  { name: "Ehnxt", phone: "1-119-848-7480" },
  { name: "Mfnrt", phone: "1-422-478-8785" },
  { name: "Kzvwg", phone: "1-418-979-3714" },
  { name: "Bogct", phone: "1-626-371-8892" },
  { name: "Ahhrl", phone: "1-700-324-8490" },
  { name: "Auycr", phone: "1-301-854-8821" },
  { name: "Bynsu", phone: "1-499-680-6734" },
  { name: "Gclqf", phone: "1-709-993-1709" },
  { name: "Amsxe", phone: "1-622-791-6004" },
  { name: "Vswqf", phone: "1-660-399-3804" },
  { name: "Dyxva", phone: "1-751-755-7014" },
  { name: "Nuttk", phone: "1-539-269-3514" },
  { name: "Wphzw", phone: "1-823-386-8392" },
  { name: "Weqhh", phone: "1-315-105-6619" },
  { name: "Rngyx", phone: "1-601-955-9057" },
  { name: "Rhica", phone: "1-822-144-8555" },
  { name: "Lkyam", phone: "1-846-992-1938" },
  { name: "Elzhg", phone: "1-663-336-4239" },
  { name: "Yuxil", phone: "1-431-598-5780" },
  { name: "Hjogz", phone: "1-196-866-7657" },
  { name: "Iprql", phone: "1-595-589-2170" },
  { name: "Vvcuw", phone: "1-598-744-6414" },
  { name: "Jeivd", phone: "1-435-212-1167" },
  { name: "Grtfd", phone: "1-192-773-3477" },
  { name: "Xcbcz", phone: "1-604-813-5019" },
  { name: "Wapvz", phone: "1-784-501-5674" },
  { name: "Djxgc", phone: "1-105-215-4957" },
  { name: "Cdzmv", phone: "1-434-566-2677" },
  { name: "Xbpqw", phone: "1-211-880-1086" },
  { name: "Hjsuw", phone: "1-499-873-6227" },
  { name: "Dhfaw", phone: "1-521-513-2473" },
  { name: "Vypdz", phone: "1-437-798-2707" },
  { name: "Cysgi", phone: "1-346-795-1341" },
  { name: "Urwjh", phone: "1-788-368-5497" },
  { name: "Yywsi", phone: "1-414-553-1432" },
  { name: "Fjieu", phone: "1-158-343-4451" },
  { name: "Qkalj", phone: "1-735-224-9911" },
  { name: "Smodq", phone: "1-949-444-3194" },
  { name: "Iosmj", phone: "1-629-265-3231" },
  { name: "Ltyog", phone: "1-973-578-6933" },
  { name: "Egdjj", phone: "1-542-570-4953" },
  { name: "Ltwhi", phone: "1-209-307-7634" },
  { name: "Guwgj", phone: "1-815-640-2928" },
  { name: "Kfpdp", phone: "1-228-996-7059" },
  { name: "Trgdb", phone: "1-958-698-2125" },
  { name: "Nmiqf", phone: "1-972-808-8237" },
  { name: "Qhega", phone: "1-673-434-4868" },
  { name: "Yrzda", phone: "1-514-710-3459" },
  { name: "Uyhta", phone: "1-324-934-9901" },
  { name: "Noizm", phone: "1-499-862-3510" },
  { name: "Qbhca", phone: "1-268-583-7903" },
  { name: "Poztp", phone: "1-386-645-5524" },
  { name: "Dyatk", phone: "1-214-560-9808" },
  { name: "Cradr", phone: "1-889-691-2625" },
  { name: "Pmwnx", phone: "1-703-568-2652" },
  { name: "Hyibp", phone: "1-308-390-8596" },
  { name: "Mytof", phone: "1-110-777-4849" },
  { name: "Skdhs", phone: "1-890-158-7233" },
];

contactList.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

// console.log(contactList);

const group = contactList.reduce((acc, contact) => {
  let groupName = contact.name.charAt(0).toUpperCase();
  if (acc[groupName]) {
    acc[groupName].push(contact);
  } else {
    acc[groupName] = [contact];
  }
  return acc;
}, {});

const displayContact = (group) => {
  console.log("Displaying Contact List");
  console.log("--------------------------------------");
  const keys = Object.keys(group);
  keys.forEach((key) => {
    console.log(`Group: ${key}`);
    console.table(group[key]);
  });
};

displayContact(group);
