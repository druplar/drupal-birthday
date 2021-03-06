const css = require('./css');

const header = title => `
  <title>${title}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    ${css()}
  </style>
`;

const render = ({ display, age, isBirthday, username }) => `
  <html>
    <head>
      ${header(username)}
      <meta name="title" content="${username}'s Drupal Birthday" />
      <meta name="description" content="${isBirthday || ''} ${username}${
  isBirthday ? ` ${isBirthday}` : ''
}'s drupal.org birthday is ${display}. The account is ${age} old." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Drupal Birthday . Fun" />
      <meta property="og:title" content="${username}'s Drupal Birthday" />
      <meta property="og:description" content="${isBirthday || ''} ${username}${
  isBirthday ? ` ${isBirthday}` : ''
}'s drupal.org birthday is ${display}. The account is ${age} old." />
      <meta property="og:url" content="https://drupalbirthday.fun/${username}" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="${username}'s Drupal Birthday" />
      <meta name="twitter:description" content="${isBirthday ||
        ''} ${username}${
  isBirthday ? ` ${isBirthday}` : ''
}'s drupal.org birthday is ${display}. The account is ${age} old." />
      <meta name="twitter:url" content="https://drupalbirthday.fun/${username}" />
    </head>
    <body>
      <p>${isBirthday || ''} <b>${username}</b>${
  isBirthday ? ` ${isBirthday}` : ''
}, your drupal.org birthday is <b>${display}</b>. Your account is <b>${age}</b> old.</p>
    </body>
  </html>
`;

const homepage = () => `
  <html>
    <title>Drupal Birthday . Fun</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      ${css()}
    </style>
    <meta name="title" content="Drupal Birthday . Fun" />
    <meta name="description" content="Find your Drupal Birthday, for Fun!" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Drupal Birthday . Fun" />
    <meta property="og:title" content="Drupal Birthday . Fun" />
    <meta property="og:description" content="Find your Drupal Birthday, for Fun!" />
    <meta property="og:url" content="https://drupalbirthday.fun/" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Drupal Birthday . Fun" />
    <meta name="twitter:description" content="Find your Drupal Birthday, for Fun!" />
    <meta name="twitter:url" content="https://drupalbirthday.fun/" />
    <script type="application/ld+json"> {
        "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://drupalbirthday.fun/",
            "name": "Drupal Birthday . Fun",
            "potentialAction": {
            "@type": "SearchAction",
                "target": "https://drupalbirthday.fun/{query}",
                "query-input": "required"
        }
    } </script>
    <body>
      <p>https://drupalbirthday.fun/{your drupal.org username}</p>
    </body>
  </html>
`;

const error = username => `
  <html>
    <title>Drupal Birthday . Fun</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      ${css()}
    </style>
    <body>
      <p>Something went wrong when looking up, <b>${username}</b>. Maybe try again?</p>
    </body>
  </html>
`;

module.exports = { render, homepage, error };
