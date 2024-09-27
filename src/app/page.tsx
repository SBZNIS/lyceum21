export default function Home() {
  return (
    <main className="flex-grow container mx-auto p-8 space-y-8">
          {/* Hero Section */}
          <section className="relative w-full h-[400px] bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url(/images/school.jpg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center rounded-lg">
              <h2 className="text-4xl font-bold text-white">Миссия лицея</h2>
              <p className="text-xl text-white max-w-3xl text-center mt-4">Используя достижения педагогической науки, обучать на основе новых технологий, готовить качественные рабочие кадры, которые хорошо знают свою профессию, любят Родину, вносят свой вклад в экономику государства, выдерживают рыночные отношения и могут работать на производстве.</p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8" id="about">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">О лицее</h3>
              <p>Профессиональный лицей №21 им. А. Балтагуловой расположен в Жалал-Абадской области Ала-Букинского района, в селе Ак-Коргон. Лицею уже более 50 лет и все эти годы он является единственным учебным заведением в районе, обучающим кадры для предприятий общественного питания, легкой промышленности, автотранспорта, сельскохозяйственного производства и золотодобывающих предприятий, подготовившим за эти годы более 10 тысяч квалифицированных рабочих кадров. Профессионально-техническое училище №21 создано 9 сентября 1970-года на базе старого здания Красной средней школы «Кызыл» Октябрьского совхоза.</p>
              <br/>
              <p>Целью учебного заведения была подготовка квалифицированных рабочих кадров для Ала-Букинского, Аксыйского и Чаткальского районов. На основании постановления правительства Кыргызской Республики от 27 июля 1993 года №336 учебное заведение было преобразовано в «Высший профессиональный технический лицей» и стало предоставлять среднее общее образование с углубленным обучением в два этапа по всем профессиям. В 1996 году преобразован из «высшего профессионального технического лицея» в «профессиональный лицей», а с 14 января 2011 года – Профессиональный лицей №21 им. Балтагуловой Айчурек Давидовны. </p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Анализ текущей ситуации</h3>
              <p>Профессиональный лицей №21 им. А. Балтагуловой является одним из наиболее известных учебных заведений страны. На протяжении 50 лет лицей обучает квалифицированных специалистов, востребованных по всей стране. В силу традиций, укоренившегося мнения и бурного развития сети, лицей остается наиболее привлекательным учреждением для большей части молодежи и выпускников школ.</p>
              <br/>
              <p>Работа приемной комиссии организована на круглогодичной основе. На базе лицея организованы краткосрочные курсы для подготовки и переподготовки из числа взрослого и безработного населения, усилена профориентационная работа среди будущих выпускников школ, налажен выпуск брошюр, видеороликов, проводятся Дни открытых дверей, фестивалей профессий, конкурсов профмастерства, мастер-классов и PR-акции (флешмобы).</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg md:col-span-2 md:col-start-1">
              <h3 className="text-2xl font-bold mb-4">Приоритеты лицея и перспективы обучения в нем:</h3>
              <p>В стране, с высоким уровнем безработицы и социальной незащищенности, в первую очередь молодежь должна иметь перспективы трудоустройства, ведь они наше будущее. Мы обучаем поколение молодых людей, отличающихся высокой работоспособностью.</p>
              <br/>
              <p>Лицей стремится дать учащимся знания, позволяющие ориентироваться в условиях рынка труда, и принимать самое активное участие в развитии экономики и культуры нашей Республики. </p>
            </div>
          </section>

          {/* Admission Section */}
          <section className="bg-gray-100 p-8 rounded-lg shadow-md" id="news">
            <h2 className="text-3xl font-bold mb-4">Как поступить?</h2>
            <p>Для поступления в Профессиональный лицей №21 необходимо пройти регистрацию на сайте <a href="https://2020.edu.gov.kg/npo/" className="text-blue-600 underline" target="_blank">https://2020.edu.gov.kg/npo/</a>.</p>

            {/* Documents List */}
            <h3 className="text-xl font-bold mt-6">Документы для поступления:</h3>
            <ol className="list-decimal pl-8 space-y-2">
              <li><i className="fas fa-file-alt"></i> Заявление на имя Директора</li>
              <li><i className="fas fa-graduation-cap"></i> Документ об образовании (свидетельство для 9 класса, аттестат для 11 класса)</li>
              <li><i className="fas fa-id-card"></i> Паспорт и/или другие документы, удостоверяющие личность</li>
              <li><i className="fas fa-map-marker-alt"></i> Справка с места жительства</li>
              <li><i className="fas fa-hospital-symbol"></i> Медицинская справка ф-086У</li>
              <li><i className="fas fa-folder"></i> Папка «скоросшиватель»</li>
            </ol>
            <br/>
            <p className="underline">Условия поступления в Профессиональный лицей №21 им. А.Балтагуловой:</p>
            <ol className="list-disc pl-8 space-y-2">
              <li><i className="fas fa-file-alt"></i>Онлайн регистрация</li>
              <li><i className="fas fa-graduation-cap"></i>Прием заявлений и документов с 1 июля </li>
              <li><i className="fas fa-id-card"></i>ПН-ПТ - 9.00–15.00, СБ - 9.00–12.00</li>
            </ol>
          </section>

          <section className="grid grid-cols-1 gap-8" id="services">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Перечень профессий</h3>
              <h4 className="text-xl font-bold mb-2">На бюджетной основе:</h4>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">№</th>
                    <th className="border px-4 py-2">Наименование спец-й</th>
                    <th className="border px-4 py-2">Срок обучения</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Электрогазосварщик, водитель автомобиля категории «С»</td>
                    <td className="border px-4 py-2">2 год (9-кл), 10 мес (11-кл)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Мастер сельскохозяйственного производства (фермер), водитель автомобиля категории «С»</td>
                    <td className="border px-4 py-2">2 год (9-кл), 10 мес (11-кл)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Портной</td>
                    <td className="border px-4 py-2">2 год (9-кл), 10 мес (11-кл)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">Повар-кондитер</td>
                    <td className="border px-4 py-2">2 год (9-кл), 10 мес (11-кл)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">5</td>
                    <td className="border px-4 py-2">Разработчик программного обеспечения</td>
                    <td className="border px-4 py-2">2 год (9-кл), 10 мес (11-кл)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">6</td>
                    <td className="border px-4 py-2">Тракторист-машинист сельскохозяйственного производства</td>
                    <td className="border px-4 py-2">2 год (9-кл), 10 мес (11-кл)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Перечень профессий</h3>
              <h4 className="text-xl font-bold mb-2">На контрактной основе:</h4>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">№</th>
                    <th className="border px-4 py-2">Наименование спец-й</th>
                    <th className="border px-4 py-2">Срок обучения</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Электрогазосварщик</td>
                    <td className="border px-4 py-2">3 месяца</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Портной</td>
                    <td className="border px-4 py-2">3 месяца</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Повар-кондитер</td>
                    <td className="border px-4 py-2">3 месяца</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">Оператор ПК</td>
                    <td className="border px-4 py-2">3 месяца</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">5</td>
                    <td className="border px-4 py-2">Парикмахер</td>
                    <td className="border px-4 py-2">3 месяца</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">6</td>
                    <td className="border px-4 py-2">Проходчик</td>
                    <td className="border px-4 py-2">3 месяца</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">7</td>
                    <td className="border px-4 py-2">Водитель автомобиля категории «ВС»</td>
                    <td className="border px-4 py-2">3,5 месяца</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">8</td>
                    <td className="border px-4 py-2">Водитель автомобиля категории «В»</td>
                    <td className="border px-4 py-2">2,5 месяца</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">О лицее</h3>
              <p>Лицей сотрудничает с множеством предприятий Кыргызстана. Среди них: </p>
              <ol className="list-disc pl-8 space-y-2">
                <li><i className="fas fa-file-alt"></i>«10 лет Кыргызстан»,</li>
                <li><i className="fas fa-graduation-cap"></i>ОсОО «Фулл Голд Майнинг Иштамберды»,</li>
                <li><i className="fas fa-id-card"></i>ОсОО «КазМинералз Бозумчак»,</li>
                <li><i className="fas fa-id-card"></i>ОсОО «ЭтиБакыр Терек-Сай»,</li>
                <li><i className="fas fa-id-card"></i>местные сельские округи и т.д.</li>
              </ol>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">	Обучение в профессиональном лицее:</h3>
              
              <ol className="list-disc pl-8 space-y-2">
                <li><i className="fas fa-file-alt"></i>начало занятий в 8 часов утра </li>
                <li><i className="fas fa-graduation-cap"></i>обучение 6 дней в неделю </li>
                <li><i className="fas fa-id-card"></i>студентам из отдаленных сел и сиротам предоставляется льготное общежитие и трехразовое питание </li>
                <li><i className="fas fa-id-card"></i>выпускникам лицея присваиваются 3–4 разряда по соответствующим специальностям, по окончанию выдаются дипломы, сертификаты государственного образца и аттестат об основном общем образовании</li>
                <li><i className="fas fa-id-card"></i>за отличную и хорошую успеваемость в лицее предусмотрена государственная стипендия </li>
                <li><i className="fas fa-id-card"></i>за активное участие в общественных мероприятиях и успеваемость, в летние каникулы студентам предоставляется отдых в Ысык-Кульском лагере «Келечек» </li>
              </ol>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-1 gap-8" id="team">
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Администрация лицея:</h3>
              
              <ol className="list-disc pl-8 space-y-2">
                <li><i className="fas fa-file-alt"></i><u>Директор:</u> Акпаралиев Сонунбек Абдылдаевич</li>
                <li><i className="fas fa-graduation-cap"></i><u>Заместитель директора по УПМР:</u> Акжолов Орозбек Ашырмамбетович</li>
                <li><i className="fas fa-id-card"></i><u>Заместитель директора по УВР:</u> Сапаркулова Толкун Мураталиевна </li>
                
              </ol>
            
              <br/><br/><br/>
            
            
              <h3 className="text-2xl font-bold mb-4">Перечень показателей сотрудников</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">№</th>
                    <th className="border px-4 py-2">Наименование показателя</th>
                    <th className="border px-4 py-2">Количество</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Всего сотрудников</td>
                    <td className="border px-4 py-2">115</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">АУП</td>
                    <td className="border px-4 py-2">6</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">ИПР</td>
                    <td className="border px-4 py-2">70</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">Аспирантура</td>
                    <td className="border px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">5</td>
                    <td className="border px-4 py-2">Магистратура</td>
                    <td className="border px-4 py-2">2</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">6</td>
                    <td className="border px-4 py-2">Бакалавр</td>
                    <td className="border px-4 py-2">45</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">7</td>
                    <td className="border px-4 py-2">Со средним спец. образованием</td>
                    <td className="border px-4 py-2">23</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">8</td>
                    <td className="border px-4 py-2">ТОП</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">9</td>
                    <td className="border px-4 py-2">МОП</td>
                    <td className="border px-4 py-2">22</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">10</td>
                    <td className="border px-4 py-2">Повышение квалификации</td>
                    <td className="border px-4 py-2">28</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">11</td>
                    <td className="border px-4 py-2">Внутри страны</td>
                    <td className="border px-4 py-2">28</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">12</td>
                    <td className="border px-4 py-2">Зарубеж</td>
                    <td className="border px-4 py-2">-</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">13</td>
                    <td className="border px-4 py-2">Заслуженные работники образования</td>
                    <td className="border px-4 py-2">18</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">14</td>
                    <td className="border px-4 py-2">Отличники ПТО</td>
                    <td className="border px-4 py-2">6</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">15</td>
                    <td className="border px-4 py-2">Почетная грамота МОН-КР</td>
                    <td className="border px-4 py-2">2</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">16</td>
                    <td className="border px-4 py-2">Почетная грамота АПТО</td>
                    <td className="border px-4 py-2">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          

          </section>

        </main>
  )
}
