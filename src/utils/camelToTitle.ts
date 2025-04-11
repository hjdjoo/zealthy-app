export default function camelToTitle (str: string) {

  const spacedName = str.replace(/[A-Z]/g, " $&")
  const camel = str.charAt(0).toUpperCase().concat(spacedName.slice(1));
  
  return camel;

}