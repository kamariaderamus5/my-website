#!/bin/bash

set -e

BUCKET="bykamaria-media"

npx wrangler r2 object put "$BUCKET/restaurants/habaneros/placesetting.jpeg" --file src/assets/restaurants/habaneros2026/optimized/placesetting.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/habaneros/arrozlatumbada.jpeg" --file src/assets/restaurants/habaneros2026/optimized/arrozlatumbada.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/habaneros/enchiladasverdes.jpeg" --file src/assets/restaurants/habaneros2026/optimized/enchiladasverdes.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/habaneros/toast.jpeg" --file src/assets/restaurants/habaneros2026/optimized/toast.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/habaneros/quesowithchorizo.jpeg" --file src/assets/restaurants/habaneros2026/optimized/quesowithchorizo.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/habaneros/lachingona.jpeg" --file src/assets/restaurants/habaneros2026/optimized/lachingona.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/habaneros/salvaje.jpeg" --file src/assets/restaurants/habaneros2026/optimized/salvaje.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/habaneros/colorada.jpeg" --file src/assets/restaurants/habaneros2026/optimized/colorada.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/habaneros/senorpepino.jpeg" --file src/assets/restaurants/habaneros2026/optimized/senorpepino.jpeg --local

npx wrangler r2 object put "$BUCKET/restaurants/bartaco/tacos.jpeg" --file src/assets/restaurants/bartaco2026/tacos.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/bartaco/corn-dip.jpeg" --file src/assets/restaurants/bartaco2026/corn-dip.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/bartaco/guac.jpeg" --file src/assets/restaurants/bartaco2026/guac.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/bartaco/drinks.jpeg" --file src/assets/restaurants/bartaco2026/drinks.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/bartaco/watermelon-margaritas.jpeg" --file src/assets/restaurants/bartaco2026/watermelon-margaritas.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/bartaco/churros.jpeg" --file src/assets/restaurants/bartaco2026/churros.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/bartaco/churros2.jpeg" --file src/assets/restaurants/bartaco2026/churros2.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/bartaco/churros3.jpeg" --file src/assets/restaurants/bartaco2026/churros3.jpeg --local

npx wrangler r2 object put "$BUCKET/restaurants/chico-cantina/chicken-taquitos.jpeg" --file src/assets/restaurants/chicocantina2026/optimized/chicken-taquitos.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/chico-cantina/margarita.jpeg" --file src/assets/restaurants/chicocantina2026/optimized/margarita.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/chico-cantina/oysters.jpeg" --file src/assets/restaurants/chicocantina2026/optimized/oysters.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/chico-cantina/tuna-crudo.jpeg" --file src/assets/restaurants/chicocantina2026/optimized/tuna-crudo.jpeg --local

npx wrangler r2 object put "$BUCKET/restaurants/yeppa/bolognese.jpeg" --file src/assets/restaurants/yeppa2026/optimized/bolognese.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/yeppa/caesar.jpeg" --file src/assets/restaurants/yeppa2026/optimized/caesar.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/yeppa/clam.jpeg" --file src/assets/restaurants/yeppa2026/optimized/clam.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/yeppa/espressomartini.jpeg" --file src/assets/restaurants/yeppa2026/optimized/espressomartini.jpeg --local
npx wrangler r2 object put "$BUCKET/restaurants/yeppa/sidecar.jpeg" --file src/assets/restaurants/yeppa2026/optimized/sidecar.jpeg --local

echo "Restaurant media upload complete."