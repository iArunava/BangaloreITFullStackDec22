# https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04
sudo apt-get update
sudo apt-get install apache2
sudo apt install php
sudo apt-get install mysql-server mysql-client

sudo mysql
# in the mysql prompt
# ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'yourpassword';
# ALTER USER 'root'@'localhost' IDENTIFIED WITH auth_socket;

sudo mysql_secure_installation
# Hit no for everything, unless you want otherwise

# sudo mysql --user=root
# no space between p and the password
# sudo mysql --user=root -p<Password>

