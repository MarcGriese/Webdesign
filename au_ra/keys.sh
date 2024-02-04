echo "Deploying files to server..."
scp -r Website-AuRa/* marc@85.215.201.176:/etc/nginx/ssl/

echo "Done!"