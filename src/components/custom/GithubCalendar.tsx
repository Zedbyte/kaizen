import GitHubCalendar from 'react-github-calendar';

export default function GitHubActivityCalendar() {
    return (
        <div className='flex justify-center'>
            <GitHubCalendar
            username="Zedbyte"
            colorScheme='dark'
            theme={{
                light: ['#ccc', '#000'],
                dark: ['#0A0A0A', '#fff'],
            }}
            blockMargin={7}
            />
        </div>
    )
}