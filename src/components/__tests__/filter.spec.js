import { filter } from '../utils'
import subset from '../__fixtures__/subset'

const ITEM = {
    'Source (Individual)': '',
    'Source (Organization)': 'Psychology Today',
    'Resources For': 'Clinicians',
    Area: 'Behavioral Health Services',
    Title: '5 Ways to Get the Most Out of Teletherapy',
    Link:
        'https://www.psychologytoday.com/us/blog/cbt-and-me/202004/5-ways-get-the-most-out-teletherapy',
    'Release Date': '4/5/2020',
}
describe('Filering Mechanism', () => {
    it('should work', () => {
        let query = {
            'Source (Organization)': '',
            'Resources For': '',
            Area: '',
            Title: '',
            Link: '',
            'Release Date': '',
        }
        filter(subset, query)
    })
})
