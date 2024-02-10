SELECT *
FROM game_sales
ORDER BY games_sold DESC
LIMIT 10;


SELECT COUNT(*)
FROM game_sales
LEFT JOIN reviews 
ON game_sales.game = reviews.game
WHERE critic_score IS NULL AND user_score IS NULL;


SELECT Year AS release_year, ROUND(AVG(reviews.critic_score), 2) AS avg_critic_score
FROM game_sales
JOIN reviews  
ON game_sales.game = reviews.game
GROUP BY release_year
ORDER BY avg_critic_score DESC
LIMIT 10;


SELECT Year AS release_year, ROUND(AVG(reviews.critic_score), 2) AS avg_critic_score, COUNT(game_sales.game) AS num_games
FROM game_sales
JOIN reviews  
ON game_sales.game = reviews.game
GROUP BY release_year
HAVING COUNT (game_sales.game) > 4
ORDER BY avg_critic_score DESC
LIMIT 10;


SELECT *
FROM release_year
HAVING plays



