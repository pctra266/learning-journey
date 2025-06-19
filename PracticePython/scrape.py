import requests
from bs4 import BeautifulSoup


url = 'https://quizlet.com/229413256/chapter-6-configuring-networking-flash-cards/'
headers = {'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0'}
soup = BeautifulSoup(requests.get(url, headers=headers).content, 'html.parser')

for i, (question, answer) in enumerate(zip(soup.select('a.SetPageTerm-wordText'), soup.select('a.SetPageTerm-definitionText')), 1):
    print('QUESTION {}'.format(i))
    print()
    print(question.get_text(strip=True, separator='\n'))
    print()
    print('ANSWER:')
    print(answer.get_text(strip=True, separator='\n'))
    print('-' * 160)