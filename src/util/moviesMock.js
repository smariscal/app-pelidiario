const movies = [
    {
       "adult":false,
       "backdrop_path":"/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
       "genre_ids":[
          28,
          878,
          14
       ],
       "id":526896,
       "original_language":"en",
       "original_title":"Morbius",
       "overview":"Peligrosamente enfermo de un extraño trastorno sanguíneo, y determinado a salvar a otras personas que padecen su mismo destino, el doctor Morbius intenta una apuesta desesperada. Lo que en un principio parece ser un éxito radical, pronto se revela como un remedio potencialmente peor que la enfermedad.",
       "popularity":12854.042,
       "poster_path":"/6WmTdYNoSinBAXs0AfTTCSaV5lw.jpg",
       "release_date":"2022-03-30",
       "title":"Morbius",
       "video":false,
       "vote_average":6.4,
       "vote_count":1091
    },
    {
       "adult":false,
       "backdrop_path":"/A3bsT0m1um6tvcmlIGxBwx9eAxn.jpg",
       "genre_ids":[
          28,
          12,
          35,
          10749
       ],
       "id":752623,
       "original_language":"en",
       "original_title":"The Lost City",
       "overview":"Una solitaria novelista romántica de gira con el modelo de la portada de su último libro se ve envuelta en un intento de secuestro que llevará a ambos a una feroz aventura en la jungla.",
       "popularity":11818.362,
       "poster_path":"/grEVYkBAVIzQ4JmZ7ydceN9DFQR.jpg",
       "release_date":"2022-03-24",
       "title":"La ciudad perdida",
       "video":false,
       "vote_average":6.8,
       "vote_count":738
    },
    {
       "adult":false,
       "backdrop_path":"/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
       "genre_ids":[
          28,
          878,
          35,
          10751,
          12
       ],
       "id":675353,
       "original_language":"en",
       "original_title":"Sonic the Hedgehog 2",
       "overview":"Después de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones, pero Sonic no esta solo lo ayudara Tails.",
       "popularity":8162.111,
       "poster_path":"/sJiHVM0A3OXDVxl4Z6a7ihMPHfm.jpg",
       "release_date":"2022-03-30",
       "title":"Sonic 2: La Película",
       "video":false,
       "vote_average":7.8,
       "vote_count":1600
    },
    {
       "adult":false,
       "backdrop_path":"/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
       "genre_ids":[
          28,
          12,
          14,
          53
       ],
       "id":639933,
       "original_language":"en",
       "original_title":"The Northman",
       "overview":"El príncipe Amleth está a punto de convertirse en hombre pero, en ese momento, su tío asesina brutalmente a su padre y secuestra a la madre del niño. Dos décadas después, Amleth es un vikingo que tiene la misión de salvar a su madre.",
       "popularity":8011.091,
       "poster_path":"/rdx0bIkwxW3EHvWn5kxZBFUT1Am.jpg",
       "release_date":"2022-04-07",
       "title":"El Hombre del Norte",
       "video":false,
       "vote_average":7.5,
       "vote_count":1071
    },
    {
       "adult":false,
       "backdrop_path":"/xHrp2pq73oi9D64xigPjWW1wcz1.jpg",
       "genre_ids":[
          80,
          9648,
          53
       ],
       "id":414906,
       "original_language":"en",
       "original_title":"The Batman",
       "overview":"Cuando un asesino se dirige a la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas envía Batman a una investigación en los bajos fondos. A medida que las pruebas comienzan a acercarse a su casa y se hace evidente la magnitud de los planes del autor, Batman debe forjar nuevas relaciones, desenmascarar al culpable y hacer justicia al abuso de poder y la corrupción que durante mucho tiempo han asolado Gotham City.",
       "popularity":5912.925,
       "poster_path":"/zFTLPipninMF4THDbdkQUZLWMEw.jpg",
       "release_date":"2022-03-01",
       "title":"The Batman",
       "video":false,
       "vote_average":7.8,
       "vote_count":4744
    },
    {
       "adult":false,
       "backdrop_path":"/figlwUsXXFehX3IebdjqNLV6vWk.jpg",
       "genre_ids":[
          28,
          53
       ],
       "id":628900,
       "original_language":"en",
       "original_title":"The Contractor",
       "overview":"Después de ser dado de baja involuntariamente de las Fuerzas Especiales de EE. UU., James Harper decide apoyar a su familia uniéndose a una organización de contratación privada junto a su mejor amigo y bajo el mando de un compañero veterano. En el extranjero en una misión encubierta, Harper debe evadir a quienes intentan matarlo mientras regresa a casa.",
       "popularity":4191.786,
       "poster_path":"/uboar85WH92Q5Ct2Y0B2YEdYRNF.jpg",
       "release_date":"2022-03-10",
       "title":"The Contractor",
       "video":false,
       "vote_average":6.6,
       "vote_count":247
    },
    {
       "adult":false,
       "backdrop_path":"/fEe5fe82qHzjO4yej0o79etqsWV.jpg",
       "genre_ids":[
          16,
          35,
          28,
          10751,
          80
       ],
       "id":629542,
       "original_language":"en",
       "original_title":"The Bad Guys",
       "overview":"Cinco villanos notorios: el Sr. Wolf, Mr. Snake, Mr. Piranha, Mr. Shark y Ms. Tarantula, que han pasado toda una vida juntos realizando grandes atracos.",
       "popularity":3098.188,
       "poster_path":"/wFdwJh3fbhp5aiRbQelVz1mbbwP.jpg",
       "release_date":"2022-03-17",
       "title":"Los Tipos Malos",
       "video":false,
       "vote_average":7.8,
       "vote_count":484
    },
    {
       "adult":false,
       "backdrop_path":"/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
       "genre_ids":[
          14,
          28,
          12
       ],
       "id":453395,
       "original_language":"en",
       "original_title":"Doctor Strange in the Multiverse of Madness",
       "overview":"Viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso para enfrentarse a un nuevo y misterioso adversario.",
       "popularity":3097.075,
       "poster_path":"/vThe85YlGE5r7fqEVFePETqnWzk.jpg",
       "release_date":"2022-05-04",
       "title":"Doctor Strange en el multiverso de la locura",
       "video":false,
       "vote_average":7.4,
       "vote_count":1819
    },
    {
       "adult":false,
       "backdrop_path":"/i0zbSmiyyylh7H3Qb4jgscz46Pm.jpg",
       "genre_ids":[
          27
       ],
       "id":893370,
       "original_language":"es",
       "original_title":"Virus-32",
       "overview":"Se desata un virus y una escalofriante masacre recorre las calles de Montevideo. Los enfermos se convierten en cazadores y solo calman su fiebre matando sin escrúpulos a todos los que aún no están infectados. Sin darse cuenta de esto, Iris y su hija pasan el día en el club deportivo donde Iris trabaja como guardia de seguridad. Cuando llega la noche, está por comenzar una pelea sin piedad. Su única esperanza de salvación llega cuando descubren que después de cada ataque los infectados parecen tener 32 segundos de paz antes de volver a cargar.",
       "popularity":3017.475,
       "poster_path":"/3CvBuw9aoziJJAbqymmsF2drnzH.jpg",
       "release_date":"2022-04-21",
       "title":"Virus-32",
       "video":false,
       "vote_average":6.9,
       "vote_count":53
    },
    {
       "adult":false,
       "backdrop_path":"/dW3fQJrshh2wYDoW4HUA7ZabsN1.jpg",
       "genre_ids":[
          28,
          53,
          80
       ],
       "id":763285,
       "original_language":"en",
       "original_title":"Ambulance",
       "overview":"Dos hermanos roban una ambulancia tras un atraco que sale mal y deberán de trabajar juntos para escapar de la policía que los persigue.",
       "popularity":2957.028,
       "poster_path":"/hUbgg3mMSbY9PlpTxBo4IFUVSd6.jpg",
       "release_date":"2022-03-16",
       "title":"Ambulance: Plan de Huida",
       "video":false,
       "vote_average":7,
       "vote_count":644
    },
    {
       "adult":false,
       "backdrop_path":"/jIdZmqElYgNwlCsUtCwmN1rDu7I.jpg",
       "genre_ids":[
          80,
          18,
          53
       ],
       "id":799876,
       "original_language":"en",
       "original_title":"The Outfit",
       "overview":"Leonard (Rylance), es un sastre inglés que confeccionaba trajes en la mundialmente famosa Savile Row de Londres. Después de una tragedia personal termina en Chicago, trabajando en una pequeña sastrería en una zona difícil de la ciudad donde hace ropa elegante para las únicas personas a su alrededor que pueden pagarla: una familia de gángsters.‎",
       "popularity":2696.795,
       "poster_path":"/uoMyXY1ReK5I1kkMMQfqod7YhXh.jpg",
       "release_date":"2022-02-25",
       "title":"El sastre de la mafia",
       "video":false,
       "vote_average":7,
       "vote_count":227
    },
    {
       "adult":false,
       "backdrop_path":"/qNRkfXBdAuXk9Qs3BEDIfmbAK9w.jpg",
       "genre_ids":[
          80,
          28
       ],
       "id":883502,
       "original_language":"en",
       "original_title":"Fortress: Sniper's Eye",
       "overview":"Semanas después del asalto mortal a Fortress Camp, Robert realiza un atrevido rescate para salvar a Sasha, la viuda de su antiguo némesis Balzary. Pero de vuelta en el búnker de mando del campamento, parece que Sasha puede tener sus propios planes tortuosos. Cuando estalla un nuevo ataque, Robert se enfrenta a un rostro familiar que pensó que nunca volvería a ver.",
       "popularity":2563.809,
       "poster_path":"/9y2ymS09bqTSM7L2DZJi7aIxor6.jpg",
       "release_date":"2022-04-29",
       "title":"Fortress: Sniper's Eye",
       "video":false,
       "vote_average":6,
       "vote_count":48
    },
    {
       "adult":false,
       "backdrop_path":"/xicKILMzPn6XZYCOpWwaxlUzg6S.jpg",
       "genre_ids":[
          53,
          28
       ],
       "id":294793,
       "original_language":"en",
       "original_title":"All the Old Knives",
       "overview":"Cuando la CIA descubre que uno de sus agentes filtró la información que costó la vida a más de 100 personas, el veterano agente Henry Pelham (Chris Pine) es asignado para descubrir quién es el topo entre sus antiguos compañeros en la oficina de la agencia en Viena. Durante su investigación se reencuentra con su antigua colega y ex amante Celia Harrison (Thandiwe Newton). La pareja se verá obligada a difuminar los límites entre la profesión y la pasión mientras reexaminan la misión en la que participaron 6 años atrás.",
       "popularity":1767.153,
       "poster_path":"/svoUDTNzUtozyQXyrQ3UDSGRjU6.jpg",
       "release_date":"2022-04-08",
       "title":"Una cita con el pasado",
       "video":false,
       "vote_average":6,
       "vote_count":245
    },
    {
       "adult":false,
       "backdrop_path":"/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
       "genre_ids":[
          28,
          12,
          14
       ],
       "id":338953,
       "original_language":"en",
       "original_title":"Fantastic Beasts: The Secrets of Dumbledore",
       "overview":"El profesor Albus Dumbledore sabe que el poderoso mago oscuro Gellert Grindelwald está haciendo planes para apoderarse del mundo mágico. Incapaz de detenerlo él solo, confía en el Magizoólogo Newt Scamander para dirigir un intrépido equipo de magos, brujas y un valiente panadero Muggle en una misión peligrosa, donde se encuentran con antiguos y nuevos animales y se enfrentan a una legión cada vez más numerosa de seguidores de Grindelwald.",
       "popularity":1465.114,
       "poster_path":"/yOeuJdwag4bAlnvgrdweRoiuXGC.jpg",
       "release_date":"2022-04-06",
       "title":"Animales Fantásticos: Los Secretos de Dumbledore",
       "video":false,
       "vote_average":6.7,
       "vote_count":1083
    },
    {
       "adult":false,
       "backdrop_path":"/An1nKjXahrChfEbZ3MAE8fsiut1.jpg",
       "genre_ids":[
          27
       ],
       "id":661791,
       "original_language":"es",
       "original_title":"La abuela",
       "overview":"Susana tiene que dejar su vida en París trabajando como modelo para regresar a Madrid. Su abuela Pilar acaba de sufrir un derrame cerebral. Años atrás, cuando los padres de Susana murieron, su abuela la crió como si fuese su propia hija. Susana necesita encontrar a alguien que cuide de Pilar, pero lo que deberían ser solo unos días con su abuela, se acabarán convirtiendo en una terrorífica pesadilla.",
       "popularity":996.775,
       "poster_path":"/19rA9FjhwI4VEfaCXV7648XUInR.jpg",
       "release_date":"2022-01-28",
       "title":"La abuela",
       "video":false,
       "vote_average":5.9,
       "vote_count":166
    },
    {
       "adult":false,
       "backdrop_path":"/tq3klWQevRK0Or0cGhsw0h3FDWQ.jpg",
       "genre_ids":[
          12,
          16,
          35,
          10751,
          14
       ],
       "id":676705,
       "original_language":"fr",
       "original_title":"Pil",
       "overview":"Pil es una pequeña huérfana que vive en la calle, en la ciudad medieval de Roc-en-Brume. Junto a sus tres comadrejas amaestradas, Pil sobrevive robando comida en el castillo del siniestro rey Tristain, que ha usurpado el trono.",
       "popularity":957.434,
       "poster_path":"/xIMqbFYkZx0pfgOLMXDdgsY6dA4.jpg",
       "release_date":"2021-08-11",
       "title":"Las aventuras de Pil",
       "video":false,
       "vote_average":6.8,
       "vote_count":86
    },
    {
       "adult":false,
       "backdrop_path":"/yzH5zvuEzzsHLZnn0jwYoPf0CMT.jpg",
       "genre_ids":[
          53,
          28
       ],
       "id":760926,
       "original_language":"en",
       "original_title":"Gold",
       "overview":"Cuando dos hombres que viajan por el desierto descubren el pedrusco de oro más grande que han visto en su vida, empiezan a soñar con la riqueza que les traerá, pero la avaricia toma las riendas. Tienen que extraer el oro de la tierra y para ello trazan un plan en el que uno de ellos tiene que ir a por el equipo necesario y el otro se tiene que quedar allí solo a su suerte.",
       "popularity":840.547,
       "poster_path":"/fjz7yOtEaRFumJK2NMpdkazLHwV.jpg",
       "release_date":"2022-01-13",
       "title":"Gold",
       "video":false,
       "vote_average":6.4,
       "vote_count":255
    },
    {
       "adult":false,
       "backdrop_path":"/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg",
       "genre_ids":[
          16,
          35,
          10751,
          10402
       ],
       "id":438695,
       "original_language":"en",
       "original_title":"Sing 2",
       "overview":"Buster Moon y sus amigos deben persuadir a la estrella del rock Clay Calloway para que se una a ellos en el estreno de un nuevo espectáculo.",
       "popularity":829.83,
       "poster_path":"/9iIDsw7RJHYU94z7k4mbYP5IlYT.jpg",
       "release_date":"2021-12-01",
       "title":"¡Canta! 2",
       "video":false,
       "vote_average":8.1,
       "vote_count":2752
    },
    {
       "adult":false,
       "backdrop_path":"/tH1afdfqqrYTP3l2oqsHEsNN5ul.jpg",
       "genre_ids":[
          16,
          10751,
          35
       ],
       "id":678287,
       "original_language":"en",
       "original_title":"Marmaduke",
       "overview":"Un perro faldero demasiado grande, con una veta irascible y una inclinación por las travesuras, se atempera con un profundo sentido de amor y responsabilidad por su familia.",
       "popularity":805.217,
       "poster_path":"/tvhX4QQnMyMjlFeShLCXovvbf0c.jpg",
       "release_date":"2022-04-28",
       "title":"Marmaduke",
       "video":false,
       "vote_average":5.6,
       "vote_count":13
    },
    {
       "adult":false,
       "backdrop_path":"/8pgKccb5PfE1kWB9qqiXJem83VC.jpg",
       "genre_ids":[
          28,
          53
       ],
       "id":522016,
       "original_language":"en",
       "original_title":"The 355",
       "overview":"Thriller de espionaje -ideado y producido por Jessica Chastain- sobre cinco mujeres que se unen, superando sus rencillas y conflictos personales, para usar sus respectivos talentos y experiencia con un objetivo: intentar evitar que una poderosa organización adquiera un arma que empuje al tambaleante mundo al caos total. En el camino, estas mujeres se convertirán en camaradas y amigas, formando un nuevo grupo cuyo nombre en clave es \"355\", nombre que adoptan de la primera mujer espía en la Revolución Americana.",
       "popularity":587.077,
       "poster_path":"/kgU2aIuDdPyKtEi8oZ6yzohpfVF.jpg",
       "release_date":"2022-01-05",
       "title":"Agentes 355",
       "video":false,
       "vote_average":6,
       "vote_count":450
    }
 ]
 
export const getMovies = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(movies)
    }, 2000)
  })
};

export const getMovie = (id) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find( (m) => {
         return m.id === Number(id);
      });
      resolve(movie)
    }, 2000)
  })
};