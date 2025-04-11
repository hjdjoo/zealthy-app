export default function titleToCamel (str: string) {

  const joined = str.split(" ").join("");
  const camel = joined.charAt(0).toLowerCase().concat(joined.slice(1));

  return camel;
  
}