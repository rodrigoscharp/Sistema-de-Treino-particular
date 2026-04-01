import os
import requests
from duckduckgo_search import DDGS

queries = {
    "elevacao frontal.jpeg": "woman front raise exercise fitness gym",
    "prancha.jpeg": "woman plank exercise fitness gym",
    "abdominal bicicleta.jpeg": "woman bicycle crunch fitness",
    "supino reto.jpeg": "woman barbell bench press gym",
    "supino inclinado.jpeg": "woman incline bench press dumbbell gym",
    "crucifixo reto.jpeg": "woman dumbbell bench flyes exercise gym",
    "triceps testa.jpeg": "woman skull crushers exercise triceps gym",
    "mergulho em banco.jpeg": "woman bench dip exercise gym"
}

output_dir = "/Users/rodrigoscharp/Dev/treino-isabelle/public/img"
os.makedirs(output_dir, exist_ok=True)

with DDGS() as ddgs:
    for filename, q in queries.items():
        print(f"Fetching image for {filename} (query: {q})")
        results = list(ddgs.images(q, max_results=5, safesearch="on"))
        if not results:
            print("No results found for", q)
            continue
            
        success = False
        for res in results:
            img_url = res.get('image')
            if img_url:
                try:
                    print(f"Trying {img_url}...")
                    response = requests.get(img_url, timeout=5, headers={'User-Agent': 'Mozilla/5.0'})
                    response.raise_for_status()
                    
                    filepath = os.path.join(output_dir, filename)
                    with open(filepath, 'wb') as f:
                        f.write(response.content)
                    print(f"Saved {filepath}")
                    success = True
                    break
                except Exception as e:
                    print(f"Failed to download {img_url}: {e}")
        if not success:
            print(f"Failed to fetch any image for {filename}")
