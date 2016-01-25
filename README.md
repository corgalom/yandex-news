# yandex-news
<h1>Yandex News archive Frontend</h1>

<p>This is an <a href="http://yandex.ru">Yandex</a> news archive. This is made for searching through Russian media sources which are noticed in heavy propaganda use.</p>

<h3>Stack:</h3>
<h4>Backend:</h4>
  <ul>
    <li>Linux server with cronjob starting news crawler every 30 minutes</li>
    <li>PHP script which have necessary permissions to launch Parse.com code</li>
    <li>Parse.com cloud function that downloads RSS stream and parses it, receiving news and inserting it into Parse.com database</li>
  </ul>
<h4>Frontend:</h4>
  <ul>
    <li>Lightweight AngularJS application</li>
  </ul>
  
<p>The demo is available at <a href="http://grigular.com/yandex/">grigular.com/yandex/</a></p>