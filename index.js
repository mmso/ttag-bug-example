const {
  c,
  msgid,
  addLocale,
  useLocale
} = require('ttag');

const translationObj = require(`./de_DE.json`);

const locale = 'de_DE';

addLocale(locale, translationObj);
useLocale(locale);

const error1 = () => {
  const name = 'John Doe';
  const count = 2;
  const result = c('Title').ngettext(msgid`Delete ${name}`, `Delete ${count} contacts`, count);

  console.log(result);
}

const error2 = () => {
  const Name = 'John Doe';
  const result = c('Title').t`Delete ${Name}`;

  console.log(result);
}

error1();
error2();
