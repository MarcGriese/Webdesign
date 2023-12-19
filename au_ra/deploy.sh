echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r public/* marc@85.215.201.176:/var/www/85.215.201.176/

echo "Done!"