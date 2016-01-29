# eote-dice

Multiplayer dice roll simulator for Edge of the Empire role-playing system.

- Allows many players to see each other's rolls;
- Maintains roll history;
- Allows secret rolling, so no other players will see the result (unless they want to cheat; no security is guaranteed).

Play at https://eote-dice.herokuapp.com/


# Building from source

```sh
git clone https://github.com/Suseika/eote-dice
cd eote-dice
sass --update public/stylesheets/style.sass
```

# Running

```sh
node bin/www
```

# Deployment to heroku

Using [heroku toolbelt](https://toolbelt.heroku.com/):

```sh
git clone https://github.com/Suseika/eote-dice
cd eote-dice
heroku login
heroku apps:create $NAME
heroku git:remote --app $NAME
./deploku.sh
```

---

Thanks to http://game2.ca/eote/ for the images of dice and effects.
