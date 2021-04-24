export default async function fetchUserLocation() {
  const response = await window.fetch('https://ipapi.co/json/'); // aqui usamos o fetch pra conectar com a API de localização de local de acordo o IP

  const userLocation = await response.json(); // reecbemso um JSON com os dados retornados

  const user = await userLocation.city; /* enviamos pra função que é chamada na home, somente o nome da cidade do usuário,
                                           que será usada para trazer a primiera consulta do tempo*/

  return user;
}

/* Aqui usamo o fetch por ser nativo do JS e não ser necessário instalar nenhuma outra dependência,
   apesar de não ser compativel no Internet Explorer e Opera, por isso caso haja algum problema pra
   carregar a página inicial, pode ser por isso */

/* Essa api não precisa de key ou cadastro e a unica necessidade é passar como queremos nosso retorno, nesse caso um JSON*/
