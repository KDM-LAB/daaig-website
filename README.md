## LLM workshop website

### Setup
```bash
# setup env
python3 -m venv venv
# activate env
source venv/bin/activate
# install requirements
pip install -r requirements.txt
# build site (creates site folder with html files in it)
mkdocs build 
# serve site 
nohup python -m http.server --directory site/ --bind 0.0.0.0 5008 &
# Access website at http://localhost:5008
```

### Deployement
```
# Directory: /home/intranet_users/kdmlab/workplace/repos/DAIIG-website

# pull latest code
git pull origin main
# activate virtualenv
source .venv/bin/activate
# build website as per latest code
mkdocs build
cd site
kill -SIGKILL `pgrep -f "python -m http.server --bind 0.0.0.0 5008"` & nohup python -m http.server  --bind 0.0.0.0 5008 &
```


# Update guidelines:
## For faculty(current as well as past):
Choose link in the following priority:
1. Homepage
2. Google Scholar page
3. Linkedin url

## For past members:
Linkedin url suffice 
1. Place member under right category: Undergraduate students, Graduate Students,  Postdoctoral Researcher, Research Associate
2. Display current affiliations wherever available
   