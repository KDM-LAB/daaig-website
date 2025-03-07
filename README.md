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
nohup python -m http.server --directory site/ --bind 0.0.0.0 5007 &
# Access website at http://localhost:5007
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
kill -SIGKILL `pgrep -f "python -m http.server --bind 0.0.0.0 5007"` & nohup python -m http.server  --bind 0.0.0.0 5007 &
```

   
