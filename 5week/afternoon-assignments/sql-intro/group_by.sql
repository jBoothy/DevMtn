-- Sum of totals in the invoice table grouped by billing_state
SELECT SUM(total), billing_state FROM invoice
GROUP BY billing_state;
-- Average track length by album. Order by averages
SELECT AVG(milliseconds), album_id FROM track
GROUP BY album_id
ORDER BY AVG(milliseconds) ASC;
-- How many albums the artists with id's 8 and 22 have respectively. Use COUNT, WHERE/IN and GROUP BY
SELECT COUNT(album_id) FROM album
WHERE artist_id IN (8, 22)
GROUP BY artist_id