import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppSelector } from "../redux-store/store";
import { ForecastForTheYear } from "./ForecastForTheYear";
import { PropsTypeForecastTheYear } from "../type/personalMatrix-type";
import { filterCalcYear } from "../utils/calc";

export function SimpleAccordion(props: PropsTypeForecastTheYear) {
  const personalMatrix = useAppSelector((state) => state.personalMatrixReducer);
  console.log(personalMatrix);
  const yearHandler = filterCalcYear(
    personalMatrix.data.isYear,
    props.gender ? props.gender : "W"
  );
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Личностные качества</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Общее</b>
            <br />
            {personalMatrix.data.isPersonalQualities.isGeneral.length !== 0
              ? personalMatrix.data.isPersonalQualities?.isGeneral.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>В позитиве</b>
            <br />
            {personalMatrix.data.isPersonalQualities.isPositive !== undefined
              ? personalMatrix.data.isPersonalQualities.isPositive.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>В негативе</b>
            <br />
            {personalMatrix.data.isPersonalQualities.isNegative !== undefined
              ? personalMatrix.data.isPersonalQualities.isNegative.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Таланты</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Талант от Бога</b>
            <br />
            {personalMatrix.data.isTalents?.isTalentsOfGod !== undefined
              ? personalMatrix.data.isTalents.isTalentsOfGod.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>Талант от Отца</b>
            <br />
            {personalMatrix.data.isTalents?.isTalentsOfDad !== undefined
              ? personalMatrix.data.isTalents.isTalentsOfDad.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />

            <b>Талант от Матери</b>
            <br />
            {personalMatrix.data.isTalents?.isTalentsOfMother !== undefined
              ? personalMatrix.data.isTalents.isTalentsOfMother.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Прошлая жизнь</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {personalMatrix.data.isPastLife !== undefined
              ? personalMatrix.data.isPastLife.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Здоровье</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>
              Сахасрара - отвечают за головной мозг, волосы, верхняя часть
              черепа.
            </b>
            <br />
            <b>Проблемы со здоровьем:</b>
            <br />
            Заболевания могут быть как косметического характера (проблемы с
            волосами), так и более серьезного уровня - проблемы со здоровьем в
            черепном отделе, нарушения функций мозга и так далее. В быту вы
            ведете себя хаотично, много беспокойства. Не понимаете отдельных
            вещей и постоянно требуете строгой конкретики.
            <br />
            <b>Причины:</b>
            <br />
            Жить полноценной жизнью вам мешают материальные привязки. Вы
            разочаровались в своих духовных идеалах и стали жестким прагматиком.
            Верите только себе и рассчитываете только на себя. К окружающим
            нередко проявляете злость и нетерпение, пытаетесь поучать и
            воспитывать в духе своих убеждений. Можете навязывать свое мнение и
            не принимаете позицию собеседника. Вы не видите своего пути и
            глобальной миссии, поэтому все силы направляете на достижение
            исключительного материального благополучия. При этом испытываете
            проблемы, отсутствие энергии, так как мыслите узко и не готовы
            принимать помощь от судьбы.
            <br />
            <b>Решение проблемы:</b>
            <br />
            Придется постигнуть высшие законы вселенной, разобраться в своем
            жизненном пути и предназначении. Так же хорошо помогать в этом
            другим людям со сходными проблемами. Определитесь со своей главной
            миссией и следуйте ей. Важно не просто зарабатывать ради своего
            комфорта и процветания, а выполнять работу, которая поможет и другим
            людям, будет служить важной идее. Относитесь к проблемам в жизни
            проще, воспринимая их как полезный опыт. Хорошо жить в режиме,
            питаться, заниматься физическими упражнениями, работой и отдыхать
            регулярно. Составьте график и следуйте ему. Полезно вести довольно
            строгий и умеренный образ жизни, не предаваться излишествам,
            заниматься энергетическими и духовными практиками.
            <br />
            {personalMatrix.data.isHealth?.Saxasrara !== undefined
              ? personalMatrix.data.isHealth.Saxasrara.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>
              Аджна - отвечают за затылочные и височные доли мозга, глаз, уши,
              нос, лицо, верхняя челюсть, зубы верхней челюсти, зрительный нерв,
              кора головного мозга.
            </b>
            <br />
            <b>Проблемы со здоровьем:</b>
            <br />В вашей ситуации встречаются заболевания глаз, ушей, частые
            проблемы с зубами. Потеря здоровья может быть связана с затылочной
            областью или проблемами в зоне лица. В более широком плане это
            выражается в проблемах при общении, отсутствии друзей, недостатке
            логики, постоянных протестах против систем, в которых находитесь
            (работа, семья, страна).
            <br />
            <b>Причины:</b>
            <br />
            Вы живете собственными иллюзиями и сильно оторваны от реальности.
            Часто настолько отдаетесь выражению протеста против внешнего мира,
            что забываете о работе и семейных обязанностях. У вас не хватает
            времени часто даже на самое необходимое. При этом вы рассуждаете и
            мечтаете о глобальных вещах, которые не в силах поменять. Свою же
            жизнь не принимаете и не можете выстроить будущее, заняться своей
            судьбой. Живете как живется, словно плывете по течению. При этом вас
            тревожит ощущение существования не своей жизнью (в профессии, месте
            жительства, в личных отношениях). Вы словно раздвоены, так как ваш
            внутренний мир не соответствует внешним ценностям. Отсюда
            неустроенность жизни, разлад между глубинными желаниями (которые
            боитесь даже постигнуть) и навязанными стереотипами общества. Могут
            возникнуть проблемы с психическим состоянием.
            <br />
            <b>Решение проблемы:</b>
            <br />
            Вам нужно расширить свой кругозор и принимать информацию из разных
            источников. Помогайте благоустройству общества, работайте со своим
            внутренним “я” и глубинным сознанием. Важно найти свое
            предназначение в жизни, свой особый энергетический поток и следовать
            ему. Возможно, придется полностью сменить систему ценностей,
            отказаться от иллюзий, за которые держались раньше. Не бойтесь
            остаться наедине с собой для глубокого постижения своей миссии в
            жизни. Осознайте свою роль, откажитесь от вредных привычек,
            научитесь грамотно распределять время и деньги. Самодисциплина
            станет важным шагом к переустройству жизни. Не забывайте о
            постоянном развитии своей личности.
            <br />
            {personalMatrix.data.isHealth?.Adjna !== undefined
              ? personalMatrix.data.isHealth.Adjna.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>
              Вишудха - отвечают за щитовидная железа, трахея, бронхи, горло,
              голосовые связки, плечи, руки, седьмой шейный позвонок, все шейные
              позвонки, нижняя челюсть, зубы нижней челюсти.
            </b>
            <br />
            <b>Проблемы со здоровьем:</b>
            <br />
            Часто повторяются заболевания горла, могут возникнуть проблемы с
            щитовидкой, нижней челюстью. Нередко болят плечи или руки. На
            бытовом уровне вы не говорите правду, лжете себе и другим, возможно
            неумение выражать мысли, некоммуникабельность или наоборот -
            постоянное перебивание собеседника.
            <br />
            <b>Причины:</b>
            <br />
            Вы боитесь говорить правду, даже ту информацию и знания, в которых
            уверены, пережили на собственном опыте. Делиться хочется и
            одновременно страшно, потому что последствия могут быть в будущем.
            Вы ведете себя шаблонно и так же мыслите, не готовы проявлять свое
            творческое начало, уникальную личность. Боитесь осуждения и
            неодобрения, а отсюда проблемы в общении, замкнутость, заниженная
            самооценка, неумение выражать себя и говорить в буквальном смысле
            (глотание слов, сбивчивый голос). Вы стараетесь следовать всем
            понятным догмам, имеете множество распространенных в обществе
            предрассудков, боитесь отличаться от других. При этом много
            фантазируете и говорите неправду, а отсюда сразу начинаются проблемы
            со здоровьем. Лжете не только другим, но даже себе.
            <br />
            <b>Решение проблемы:</b>
            <br />
            Нужно пересмотреть и проанализировать опыт прошлого. Передать всю
            его ценность и постигнутые вами истины людям в любой словесной,
            устной форме. Вам важно начать говорить, это может быть видео ролик
            на ютубе, песня в караоке, первый в жизни тост в большой компании.
            Высказывайтесь на собраниях и на работе при принятии коллективных
            решений, просто пойте в ванной, рассказывайте что-то в кругу друзей.
            Но обязательно начинать проговаривать свои мысли, опыт и мнение.
            Говорите правду и избегайте лжи в любой форме. Для успеха
            используйте подсказки жизни и больше прислушивайтесь к себе.
            Занимайтесь творческим самовыражением.
            <br />
            {personalMatrix.data.isHealth?.Vishydha !== undefined
              ? personalMatrix.data.isHealth.Vishydha.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>
              Анахата - отвечают за сердце, кровеносная система, органы дыхания,
              легкие, бронхи, грудной отдел позвоночника, рёбра, лопаточная зона
              спины, грудь.
            </b>
            <br />
            <b>Проблемы со здоровьем:</b>
            <br />
            Проблемы обычно наблюдаются с сердцем, легкими, бронхами. Возможны
            травмы ребер и все заболевания, связанные с областью грудной клетки.
            Это проявляется и на бытовом уровне: вам словно что-то мешает
            расправить грудь и дышать в полную силу. Много планов, но нет
            энергии на их реализацию.
            <br />
            <b>Причины:</b>
            <br />
            Вы находитесь в глубочайшей депрессии и словно полностью обесточены.
            Нет сил двигаться вперед, все время обращаетесь к какому-то случаю в
            прошлом. Нередко испытываете чувство вины и раскаяния. Вы хотите
            словно застраховаться от неприятностей, но не знаете как. Поэтому
            страшно идти дальше, реализовывать свои идеи, помогать другим
            создавать лучшее будущее. В то же время и внутри вы недостаточно
            испытываете любви к окружающим, словно ничем не наполнены. Настоящее
            вас не радует, непонятно, как дальше жить и выходить из состояния
            глубокого физического и душевного упадка. Это может выражаться как в
            полном равнодушии и желании, чтобы вас все оставили в покое, так и в
            излишней жертвенности по отношению к другим. Вы много отдаете, но
            ничего не получаете взамен, энергия тратится впустую, вы не
            чувствуете удовлетворения. Порой сами ждете чудесной помощи извне,
            решения ваших проблем.
            <br />
            <b>Решение проблемы:</b>
            <br />
            Единомышленниками или психологом. Пусть это будет своеобразная
            исповедь, раскрытие своих плохих поступков и черт характера, за
            которые вам стыдно. Вы можете таким образом даже самостоятельно
            создавать группы для обмена знаниями и опытом в построении
            счастливых, гармоничных отношений. Вам необходимо построить для себя
            новую картину мира, научиться верить и любить взаимно и счастливо.
            Учитесь чему-то новому и всегда имейте пространство комфорта, где
            можно быть собой и просто расслабиться с близкими. Проанализируйте
            свое окружение и общайтесь с истинными друзьями, не тратя время на
            пустые контакты. Будьте настоящим, старайтесь выражать свои эмоции
            открыто. Переведите фокус со своих проблем на общие задачи своего
            круга общения. Научитесь принимать людей и себя со всеми светлыми и
            темными сторонами. Так в нужный момент вы сможете собраться и стать
            самодостаточным, без обвинений себя и окружающих, без зависимости от
            чужого одобрения или помощи.
            <br />
            {personalMatrix.data.isHealth?.Anaxata !== undefined
              ? personalMatrix.data.isHealth.Anaxata.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>
              Манипура - отвечают за ЖКТ, органы брюшной полости, поджелудочная
              железа, селезёнка, печень, желчный пузырь, тонкий кишечник,
              центральная часть позвоночника.
            </b>
            <br />
            <b>Проблемы со здоровьем:</b>
            <br />
            Заболевания могут быть в области желудочно-кишечного тракта. Нередко
            поражается средняя часть позвоночника. На поведенческом уровне это
            выражается в агрессии, раздражительности, неадекватности. Равнодушие
            может резко переходить в злобу и требовательность. Вы теряете что-то
            важное и делаете все, чтобы удержать это, в том числе незаконными
            методами, нарушая все нормы морали и права.
            <br />
            <b>Причины:</b>
            <br />
            Вы испытываете слишком сильную привязанность в отношении к человеку,
            либо вещам, обстоятельствам, образу жизни. При этом сами наделяете
            их исключительными, ценными для себя свойствами. Для вас важно
            контролировать и обладать. Вы часто высокомерны и амбициозны, любите
            показывать свою парадную сторону жизни и гордиться успехами. Ради
            результата не видите недостойных средств. В то же время можете быть
            безответственны. С людьми ниже вас по социальной лестнице,
            зависимыми (например, подчиненные на работе) не контактируете
            совсем. В какой-то момент жизнь начинает отнимать самое важное,
            чтобы вы начали действовать, развиваться, выходить из привычной зоны
            комфорта. Но вместо этого вы жалуетесь или проявляете агрессию. Не
            хотите меняться и хватаетесь за то, что у вас отбирают, любыми
            путями. Придется столкнуться с собой внутренним и понять, что не все
            зависит от вас и подвластно вашему влиянию. Как только сможете
            отпустить это - угроза потери минует.
            <br />
            <b>Решение проблемы:</b>
            <br />
            Определите новые границы жизни, уберите прежние рамки, вы должны
            развиваться. Переоцените окружение и принимайте мир таким, как он
            есть, без гордости и высокомерия. Совершайте спонтанные поступки и
            избавляйтесь от собственных комплексов. Сделайте что-то
            несвойственное кардинальная смена имиджа). Начните выстраивать
            отношения с разными людьми, а не только с теми, кто вам выгоден.
            Неплохо начать заниматься благотворительностью. Дисциплинируйте себя
            и развивайте волю через спорт, правильное питание, соблюдение
            режима. Так вы сможете освободиться от рамок и собственного
            недовольства, разочарования, агрессии. Станьте хозяином своего тела
            и эмоций.
            <br />
            {personalMatrix.data.isHealth?.Manipura !== undefined
              ? personalMatrix.data.isHealth.Manipura.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>
              Свадхистана - отвечают за надпочечники, матка и яичники, почки,
              кишечник, предстательная железа у мужчин, поясничный район
              позвоночного столба.
            </b>
            <br />
            <b>Проблемы со здоровьем:</b>
            <br />В физическом плане можно страдать от заболевания таких
            органов, как почки, печень, толстый кишечник, половая сфера,
            надпочечники, поясничный отдел. На бытовом уровне это отражается в
            чувстве постоянной вины, ощущения нехватки любви, раздражительности,
            отсутствии радости от о всего. Вы можете ответственности или
            чрезмерно искать выгоду во всем при недостатке плодов от вашей
            деятельности. Не повышают зарплату, нет заказов, вы начинаете
            экономить и выгадывать, впадаете в еще большую депрессию.
            <br />
            <b>Причины:</b>
            <br />
            Часто все идет из детства, когда родители недостаточно уделяли
            внимания, где- то недооценили, недолюбили. Когда во взрослой жизни
            сталкиваетесь с подобной ситуацией, внутри просыпается тот обиженный
            ребенок. И вы моментально ставите себе блок, отказываетесь от
            дальнейших действий. Вслед за этим возникает чувство вины, что не
            выполнили обязательства, поступили неправильно. И так повторяется
            много раз вплоть до серьезного крушения в жизни (как потеря работы).
            У вас нет сил для творчества, создания каких-то плодов деятельности.
            Не заводите детей, ведь внутренне еще сами довольно инфантильны и не
            дали достаточно ребенку в себе. Нет энергии, сил и знаний откуда
            взять вдохновение для жизненного толчка.
            <br />
            <b>Решение проблемы:</b>
            <br />
            Примите своих родителей и полюбите в себе того недолюбленного
            ребенка. Позвольте себе жить как хочется, реализуйте свои желания
            одно за другим. Найдите единомышленников, заведите друзей, с
            которыми можно проговаривать и решать свои эмоциональные проблемы.
            Откажитесь от крайностей - чрезмерного шопоголизма или фанатичного
            накопления ценностей. Избавьтесь от внутреннего стыда перед собой и
            близкими. Позвольте реализоваться себе творчески. Ищите источник
            энергии для себя в приятных вещах. Это может быть массаж,
            организация мероприятий, забота о внешности, любой вид отдыха. Важно
            найти любимое занятие и работать в комфортной зоне, где сможете
            максимально раскрыться.
            <br />
            {personalMatrix.data.isHealth?.Svadxistana !== undefined
              ? personalMatrix.data.isHealth.Svadxistana.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>
              Муладхара - отвечают за Мочеполовая система, нижние конечности,
              толстый кишечник, копчик, крестец, ноги.
            </b>
            <br />
            <b>Проблемы со здоровьем:</b>
            <br />
            На физическом плане начинаются проблемы с ногами, мочеполовой
            системой, областью крестца. В жизненном плане материальным голодом,
            крушением жизни, постоянной нехваткой брошенности и неоцененности.
            Вы испытываете усталость и чувство безнадежности ситуации.
            <br />
            <b>Причины:</b>
            <br />
            Вы слишком зациклены на прошлом, живете в нем, постоянно
            возвращаетесь туда воспоминаниями. Здесь возможно два варианта.
            Когда-то было очень хорошо - благополучие, счастье, достаток. А
            сейчас - плохо, и вы не можете принять ситуацию, живете
            воспоминаниями о прошлом. Или наоборот - в прошлом было несколько
            повторяющихся ситуаций с проблемами, неудачами, предательством. Вы
            не можете этого забыть и двигаться вперед. Постоянно крутитесь как
            белка в колесе, но ничего не меняется. От этого усталость, страх на
            грани выживания, вы экономите на всем и постоянно себя сдерживаете.
            Хочется просто уже отказаться от движения, так как нет энергии и
            результата. Ждете “волшебной палочки”, которая решит все за вас.
            <br />
            <b>Решение проблемы:</b>
            <br />
            Пересмотрите свои ценности и отношение к прошлому. Умейте видеть
            хорошее в настоящем. Даже в самом неудачном прошлом тоже найдите
            позитивные примеры и уроки. Нужно быть готовым к переменам. Сделайте
            для себя настоящее более ценным, чем прошлое. Все проблемы не
            навсегда, жизнь течет, а ситуации меняются. Будьте готовы поймать
            благоприятный момент. Полезно заняться чем-то увлекательным и
            интересным, пусть даже вначале не приносящим больших денег.
            Освободитесь от прошлого и на элементарном, бытовом уровне. По
            возможности, сделайте ремонт или поменяйте часть обстановки, уберите
            старые фото и вещи.
            <br />
            {personalMatrix.data.isHealth?.Muladxara !== undefined
              ? personalMatrix.data.isHealth.Muladxara.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Предназначение</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Предназначение (20-40 лет)</b>
            <br />
            {personalMatrix.data.isPurpose?.isPurpose20_40.length !== undefined
              ? personalMatrix.data.isPurpose.isPurpose20_40.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>Предназначение (40-60 лет)</b>
            <br />
            {personalMatrix.data.isPurpose?.isPurpose40_60.length !== undefined
              ? personalMatrix.data.isPurpose.isPurpose40_60.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>Предназначение (общие)</b>
            <br />
            {personalMatrix.data.isPurpose?.isGeneralPurpose.length !==
            undefined
              ? personalMatrix.data.isPurpose.isGeneralPurpose.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Код личной силы</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {personalMatrix.data.isPersonalPowerCode?.length !== undefined
              ? personalMatrix.data.isPersonalPowerCode.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Отношения и любовь</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Отношения у {props.gender === "M" ? "мужчин" : "женщин"}</b>
            <br />
            {personalMatrix.data.isLove?.isLoveMenOrWomen.length !== undefined
              ? personalMatrix.data.isLove.isLoveMenOrWomen.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>Характер партнёра</b>
            <br />
            {personalMatrix.data.isLove?.isCharacterLoveMenOrWomen.length !==
            undefined
              ? personalMatrix.data.isLove.isCharacterLoveMenOrWomen.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>На выходе</b>
            <br />
            {personalMatrix.data.isLove?.loveTotal.length !== undefined
              ? personalMatrix.data.isLove.loveTotal.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Деньги</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Направление деятельности</b>
            <br />
            {personalMatrix.data.isMoney?.moneyLineOfActivity.length !==
            undefined
              ? personalMatrix.data.isMoney.moneyLineOfActivity.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Для достижения успеха важно</b>
            <br />
            {personalMatrix.data.isMoney?.moneySuccess.length !== undefined
              ? personalMatrix.data.isMoney.moneySuccess.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>Как раскрыть денежный поток</b>
            <br />
            {personalMatrix.data.isMoney?.moneyFlow.length !== undefined
              ? personalMatrix.data.isMoney.moneyFlow.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text
                      .split("\n")
                      .map((paragraph: string, innerIndex: number) => (
                        <React.Fragment key={innerIndex}>
                          {paragraph}
                          <br key={`br-${index}`} />
                        </React.Fragment>
                      ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Родители</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <b>Родовые программы по мужской линии</b>
            <br />
            {personalMatrix.data.isParents?.parentMenLine.length !== undefined
              ? personalMatrix.data.isParents.parentMenLine.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
            <br />
            <b>Родовые программы по женской линии</b>
            <br />
            {personalMatrix.data.isParents?.parentWomenLine.length !== undefined
              ? personalMatrix.data.isParents.parentWomenLine.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
            <br />
            <b>Обиды на родителей</b>
            <br />
            {personalMatrix.data.isParents?.parentResentment.length !==
            undefined
              ? personalMatrix.data.isParents.parentResentment.map(
                  (e, index) => (
                    <React.Fragment key={index}>
                      {e.text
                        .split("\n")
                        .map((paragraph: string, innerIndex) => (
                          <React.Fragment key={innerIndex}>
                            {paragraph}
                            <br key={`br-${index}`} />
                          </React.Fragment>
                        ))}
                      <br />
                    </React.Fragment>
                  )
                )
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Дети</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {personalMatrix.data.isChildren !== undefined
              ? personalMatrix.data.isChildren.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Руководство</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {personalMatrix.data.isManagement !== undefined
              ? personalMatrix.data.isManagement.map((e, index) => (
                  <React.Fragment key={index}>
                    {e.text.split("\n").map((paragraph: string, innerIndex) => (
                      <React.Fragment key={innerIndex}>
                        {paragraph}
                        <br key={`br-${index}`} />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))
              : ""}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Прогнозы по годам</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ForecastForTheYear
              yaer={yearHandler}
              age={props.age}
              B={props.B}
              D={props.D}
              DHDD={props.DHDD}
              BFBF={props.BFBF}
              BFB={props.BFB}
              DHD={props.DHD}
              BFBBF={props.BFBBF}
              DHDDH={props.DHDDH}
              BF={props.BF}
              DH={props.DH}
              BFFBF={props.BFFBF}
              DHHDH={props.DHHDH}
              BFF={props.BFF}
              DHH={props.DHH}
              BFFF={props.BFFF}
              DHHH={props.DHHH}
              F={props.F}
              H={props.H}
              FCFF={props.FCFF}
              HAHH={props.HAHH}
              FCF={props.FCF}
              HAH={props.HAH}
              FCFFC={props.FCFFC}
              HAHHA={props.HAHHA}
              FC={props.FC}
              HA={props.HA}
              FCCFC={props.FCCFC}
              HAAHA={props.HAAHA}
              FCC={props.FCC}
              HAA={props.HAA}
              FCCC={props.FCCC}
              HAAA={props.HAAA}
              C={props.C}
              A={props.A}
              CGCC={props.CGCC}
              AEAA={props.AEAA}
              CGC={props.CGC}
              AEA={props.AEA}
              CGCCG={props.CGCCG}
              AEAAE={props.AEAAE}
              CG={props.CG}
              AE={props.AE}
              CGGCG={props.CGGCG}
              AEEAE={props.AEEAE}
              CGG={props.CGG}
              AEE={props.AEE}
              CGGG={props.CGGG}
              AEEE={props.AEEE}
              G={props.G}
              E={props.E}
              GDGG={props.GDGG}
              EBEE={props.EBEE}
              GDG={props.GDG}
              EBE={props.EBE}
              GDGGD={props.GDGGD}
              EBEEB={props.EBEEB}
              GD={props.GD}
              EB={props.EB}
              GDDGD={props.GDDGD}
              EBBEB={props.EBBEB}
              GDD={props.GDD}
              EBB={props.EBB}
              GDDD={props.GDDD}
              EBBB={props.EBBB}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
