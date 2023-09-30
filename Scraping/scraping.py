from bs4 import BeautifulSoup
import csv

with open('GDP.html', 'r') as html_file:
    content = html_file.read()
    rows_to_write = []
    soup = BeautifulSoup(content, 'lxml')
    tags_row = soup.find_all('tr')
    i = 0
    for row in tags_row:
        td_elements = row.find_all('td')  # Find all <td> elements within the current <tr>
        
        row_entry = [td_element.text.strip() for td_element in td_elements]
        i +=1
        if i > 2:
            # print(row_entry)
            rows_to_write.append(row_entry)


csv_file_name = 'GDP.csv'

# Write the rows to the CSV file
with open(csv_file_name, mode='w', newline='') as csv_file:
    writer = csv.writer(csv_file)
    for row_entry in rows_to_write:
        writer.writerow(row_entry)

print(f"Data has been written to {csv_file_name}")
