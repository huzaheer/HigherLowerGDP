from bs4 import BeautifulSoup

with open('GDP.html', 'r') as html_file:
    content = html_file.read()

    soup = BeautifulSoup(content, 'lxml')
    tags_row = soup.find_all('tr')

    for row in tags_row:
        td_elements = row.find_all('td')  # Find all <td> elements within the current <tr>
        
        row_entry = [td_element.text for td_element in td_elements]
        print(row_entry)

