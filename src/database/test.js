const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db)=> {
    //inserir dados

    proffyValue = {
        name : "Anna Alice", 
        avatar: "Img/Anna.png",
        whatsapp:"998553349",
        bio:`Entusiasta das melhores tecnologias de química avançada.<br><br>
        Apaixonado por explodir coisas em laboratório e por mudar a vida 
        das pessoas através de experiências. Mais de 200.000 pessoas 
        já passaram por uma das minhas explosões.`,
        
    }

    classValue = {

        subject:1,
        cost:"20",
      //o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        //class_id vira pelo banco de dados,apos cadastramos a class
        {
            weekday:1,
            time_from:720,
            time_to:1220
        },
        {
            weekday:0,
            time_from:520,
            time_to:1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados
    //todos os proffys

    const selectedProffys =await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado proffy 
    //e trazer junto os dados do professor 

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE  classes.proffy_id = 1;
    `)

    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horario do time_from(8h) precisa ser menor ou igual ao horario solicidado
    // o time_to precisa ser acima 

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekay = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)
})