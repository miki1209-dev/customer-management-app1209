FROM php:8.4-fpm-alpine

# system deps
RUN apk add --no-cache git curl libpng-dev libjpeg-turbo-dev libzip-dev oniguruma-dev icu-dev

# PHP拡張
RUN docker-php-ext-configure gd --with-jpeg
RUN docker-php-ext-install pdo_mysql mbstring zip intl gd

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html