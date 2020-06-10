const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const {
      from,
      company,
      dates,
      idea
    } = req.body;

    /*
    _ _    _____   _______    ____    _____    _   _ _
   ( | )  / ____| |__   __|  / __ \  |  __ \  | | ( | )
    V V  | (___      | |    | |  | | | |__) | | |  V V
          \___ \     | |    | |  | | |  ___/  | |
          ____) |    | |    | |__| | | |      |_|
         |_____/     |_|     \____/  |_|      (_)


    _ _   _   _    ____    _   _ _
   ( | ) | \ | |  / __ \  | | ( | )
    V V  |  \| | | |  | | | |  V V
         | . ` | | |  | | | |
         | |\  | | |__| | |_|
         |_| \_|  \____/  (_)
    */

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      auth: {
        user: 'doemu@outlook.com',
        pass: 'kleinholz9898',
      },
      secureConnection: false,
      tls: {
        ciphers: 'SSLv3'
      }
    });

    const mailOptions = {
      from: 'Doemuu Outlook <doemu@outlook.com>',
      to: 'Doemuu Outlook <doemu@outlook.com>',
      subject: `Cousin Response from ${from[0].toUpperCase() + from.slice(1).toLowerCase()}`,
      html: `
            <style>
              div {
                font-family: 'Comic Sans';
              }

              h1 {
                font-size: 200px;
              }

              strong {
                font-size: 40px;
              }
            </style>
            <div>
              <h1>Yo Boi ${from} here!</h1>
              <p>Ich bin ${company ? "in Begleitung" : "4EvaAlonE"}.</p>
              <p><strong>Präferierte Daten:</strong></p>
              <ul>
                ${dates.map(date => `<li>${date.date}</li>`)}
              </ul>
              <p>Ich will ${idea === "weggis" ? "an den See." : "in eine Waldhütte."}</p>
            </div>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        res.status(500).send(err.toString());
      }
      res.status(200).send("Email sent!");
    });
  });

});
