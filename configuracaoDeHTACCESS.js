

Toda vez que um arquivo htaccess é inserido em um diretório suas  instruções são interpretadas de modo prioritário(em relação a  configuração padrão aplicada para o servidor).Para  criar as regras abaixo, abra o bloco de notas ou similar, salve com o  nome .htaccess. Vale ressaltar que alguns códigos só funcionarão se  determinadas extensões estiverem habilitadas no apache. Caso algum  código gere um erro 500, habilite no apache o módulo correspondente a  ele. E para evitar tais erros, faça os códigos em estruturas  condicionais (<IfModule>), assim o código só será executado caso o  módulo esteja ativo.

Você pode consultar a documentação oficial sobre o uso do htaccess em português no link abaixo:
http://httpd.apache.org/docs/2.2/pt-br/howto/htaccess.html

Ocultando o index da URL

Options +FollowSymLinks RewriteEngine On RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /([^/]+/)*index\.html\ HTTP/ RewriteRule ^(([^/]+/)*)index\.html$ http://www.seusite.com.br/$1 [R=301,L] #obs, se o seu site é feito em php, substitua os “html” pelo mesmo

Protegendo o seu site contra cópia ou uso indevido de arquivos (como scripts php, js, css, imagens)

RewriteEngine on RewriteCond %{HTTP_REFERER} !^http://seusite.com.br/.*$ [NC]  #este site está liberado a usar (o seu site no caso) RewriteCond %{HTTP_REFERER} !^http://www.seusite.com.br/.*$ [NC]  #este site está liberado a usar RewriteCond %{HTTP_REFERER} !^http://www.google.com.br/.*$ [NC]  #liberar o google para usar as suas imagens RewriteRule .*\.(jpg|jpeg|gif|png|bmp|php|js|swf)$ – [F,NC] #Neste caso, se alguém que não está na lista acima tentar usar as suas imagens direto do seu site ou usar os seus scripts, mostrará uma tela com erro e as imagens não serão mostradas.

Bloquear o arquivo .htaccess contra acesso pela URL

<Files ~ “^\.(htaccess|htpasswd){:content:}quot;>   deny from all </Files>

Bloqueando arquivos específicos contra acesso pela URL

<files seuarquivo.php>   order allow,deny   deny from all </files>

Sempre colocar “www” na URL

RewriteEngine on RewriteCond %{HTTP_HOST} ^(seusite\.com\.br)(:80)? [NC] RewriteRule ^(.*) http://www.seusite.com.br/$1 [R=301,L] order deny,allow

Comprimir arquivos do site para consumir menos banda

<IfModule mod_deflate.c>   <FilesMatch “\.(js|css|jpg|png|gif|ico|php|html|htm){:content:}quot;>     <ifModule mod_filter.c>       SetOutputFilter DEFLATE       AddOutputFilterByType DEFLATE text/css text/javascript application/x-javascript text/html text/plain text/xml image/x-icon     </IfModule>   </FilesMatch> </IfModule>

Criando páginas de erros personalizadas

ErrorDocument 400 /sua-pagina-erro-400 ErrorDocument 404 /página-de-erro-404 ErrorDocument 500 /página-para-erro-500

Alterar a página inicial (padrão) do site

DirectoryIndex minhaoutrapagina.html

Redirecionamento 301 com htaccess

Redirect 301 /página-a-ser-movida  http://www.seusite.c…-movida-para-ca

Bloquear listagem de diretórios

Options -Indexes

Forçar o uso de SSL

RewriteEngine On RewriteCond %{SERVER_PORT} 80 RewriteRule ^(.*)$ https://seu-site.com.br/$1 [R,L]

Desabilitar case sensitive

CheckSpelling On #agora a url PAGINA.HTML é igualmente acessada por pagina.html

Restringindo o acesso por IP

Order allow,deny allow from 192.168.0. deny from all  # Deixa a somente a INTRANET acessar Order deny,allow deny from 192.168.0.25 allow from all # Deixa todo mundo acessar, menos o IP 192.168.0.25 Order deny, allow deny from all #bloquear geral

Redirecionar acesso de um site para outro lugar

RewriteEngine on RewriteCond %{HTTP_REFERER} ^http(s)?://(www\.)?bloqueado.com.br.*$ [NC] RewriteRule .* http://www.antispam.br [R,L] #Se o site “bloqueado” mandar algum visitante para aqui, é redirecionado para o “antispam”

Expressões regulares

#todos os arquivos de uma página serão redirecionados para outra RewriteEngine on RewriteRule ^pagina-antiga/(.*) http://www.novosite….agina-antiga/$1 #redirecionar somente os arquivos terminados em php RewriteEngine om RewriteRule ^pagina-antiga/(.*)\.php http://www.novosite….a-antiga/$1.php #redirecionar tudo de um site para outro RedirectMatch permanent /(.*) http://www.novosite.com/$1

Retirar extensões da URL

RewriteEngine on RewriteCond %{REQUEST_FILENAME} !-d RewriteCond %{REQUEST_FILENAME}\.html -f RewriteRule ^(.*)$ $1.html #neste caso, estou retirando apenas o HTML

Forçar o uso do Charset UTF-8 para arquivos

<FilesMatch “\.(htm|html|css|js){:content:}quot;>   AddDefaultCharset UTF-8 </FilesMatch>

Cache de navegador – Definir tempo de expiração (segundos)

<ifModule mod_expires.c>   ExpiresActive On   ExpiresDefault A0   ExpiresByType image/gif A604800     ExpiresByType image/jpeg A604800   ExpiresByType image/png A604800   ExpiresByType text/css A604800   ExpiresByType text/javascript A604800   ExpiresByType application/x-javascript A604800 </ifModule>

Cache de navegador – Definir controle de cache (segundos)

<IfModule mod_headers.c>  <FilesMatch “\.(ico|pdf|flv|jpg|jpeg|png|gif|js|css|swf|xml|woff){:content:}quot;>  Header set Cache-Control “max-age=604800, public”  Header append Vary User-Agent env=!dont-vary  Header append Vary Accept-Encoding  Header unset Pragma  </FilesMatch> </IfModule>

Cache de navegador – Forçar o uso do cache, desabilitando o ETag

<IfModule mod_headers.c>  Header unset Etag  Header unset Last-Modified  </IfModule>

Adicionar novos mimetypes

AddType application/x-endnote-connection enz AddType application/x-endnote-filter enf AddType application/x-spss-savefile sav

Desabilitar execução de certos Scripts

Options -ExecCGI AddHandler cgi-script .php .pl .py .jsp .asp .htm .shtml .sh .cgi

Alterar a linguagem Padrão

DefaultLanguage pt-BR

Alterar fuso horário padrão

SetEnv TZ America/Indianapolis

Forçar download de certos arquivos

AddType application/octet-stream .avi .mpg .mov .pdf .xls .mp4

Bloquear requisição baseado no user-agent

SetEnvIfNoCase ^User-Agent$ .*(craftbot|download|extract|stripper|sucker|ninja|clshttp|webspider|leacher|collector|grabber|webpictures) HTTP_SAFE_BADBOT SetEnvIfNoCase ^User-Agent$ .*(libwww-perl|aesop_com_spiderman) HTTP_SAFE_BADBOT Deny from env=HTTP_SAFE_BADBOT




