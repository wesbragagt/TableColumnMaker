const arr = [
  {
    id: 1,
    first_name: "Maridel",
    last_name: "Ryland",
    email: "mryland0@51.la",
    gender: "Female",
    ip_address: "79.10.176.94"
  },
  {
    id: 2,
    first_name: "Giselbert",
    last_name: "Dozdill",
    email: "gdozdill1@elpais.com",
    gender: "Male",
    ip_address: "77.196.6.43"
  },
  {
    id: 3,
    first_name: "Chelsy",
    last_name: "Balding",
    email: "cbalding2@yellowbook.com",
    gender: "Female",
    ip_address: "154.238.171.134"
  },
  {
    id: 4,
    first_name: "Sonni",
    last_name: "Mallon",
    email: "smallon3@psu.edu",
    gender: "Female",
    ip_address: "104.10.13.208"
  },
  {
    id: 5,
    first_name: "Sibby",
    last_name: "Azema",
    email: "sazema4@ucoz.com",
    gender: "Female",
    ip_address: "36.250.46.195"
  }
];
const pipe = (...fns) => x => fns.reduce((y, fn) => fn(y), x)
// get list of key names from object
const getProperties = arr => Object.keys(arr[0])
// method assign to columns so user can add more colDefs
const addProp = function(props){
  for(let key in props){
       this[key] = props[key]
     }   
}
// transform a list of strings into an object mapping
const toObject = arr => arr.reduce((acc, key) => {
  return {...acc, [key]: { headerName: key.toUpperCase(), field: key, addProp }}
}, {})
// convert object mapping to colDefs
const transformColumnMap = object => {
  return Object.entries(object).reduce((acc, cur) => {
    const [key, value] = cur
    delete value.addProp
    return [...acc, {...value}]
  },[])
}
const colDef = pipe(getProperties, toObject)(arr)

colDef.id.addProp({howdy: 'howdy'})
colDef.last_name.addProp({valueFormatter: param => param.value})
// finally output the result into a columns format which for most table libraries its an array of objects with some properties
transformColumnMap(colDef)





