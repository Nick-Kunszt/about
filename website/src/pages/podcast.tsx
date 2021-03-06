import * as React from 'react'
import Layout from '../components/Layout'
import { ContentPage } from '../components/content/ContentPage'
import { ContentSection } from '../components/content/ContentSection'
export default class JobsPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            jobs: [],
        }
    }

    public componentDidMount(): void {
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none')
        }
    }

    public render(): JSX.Element | null {
        const appleIcon = <svg aria-hidden="true" data-icon="podcast" viewBox="0 0 448 512" className="podcast__icon" xmlns="http://www.w3.org/2000/svg">
            <title>Podcast icon</title>
            <path fill="currentColor" d="M267.429 488.563C262.286 507.573 242.858 512 224 512c-18.857 0-38.286-4.427-43.428-23.437C172.927 460.134 160 388.898 160 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813zM156.867 288.554c-18.693-18.308-29.958-44.173-28.784-72.599 2.054-49.724 42.395-89.956 92.124-91.881C274.862 121.958 320 165.807 320 220c0 26.827-11.064 51.116-28.866 68.552-2.675 2.62-2.401 6.986.628 9.187 9.312 6.765 16.46 15.343 21.234 25.363 1.741 3.654 6.497 4.66 9.449 1.891 28.826-27.043 46.553-65.783 45.511-108.565-1.855-76.206-63.595-138.208-139.793-140.369C146.869 73.753 80 139.215 80 220c0 41.361 17.532 78.7 45.55 104.989 2.953 2.771 7.711 1.77 9.453-1.887 4.774-10.021 11.923-18.598 21.235-25.363 3.029-2.2 3.304-6.566.629-9.185zM224 0C100.204 0 0 100.185 0 224c0 89.992 52.602 165.647 125.739 201.408 4.333 2.118 9.267-1.544 8.535-6.31-2.382-15.512-4.342-30.946-5.406-44.339-.146-1.836-1.149-3.486-2.678-4.512-47.4-31.806-78.564-86.016-78.187-147.347.592-96.237 79.29-174.648 175.529-174.899C320.793 47.747 400 126.797 400 224c0 61.932-32.158 116.49-80.65 147.867-.999 14.037-3.069 30.588-5.624 47.23-.732 4.767 4.203 8.429 8.535 6.31C395.227 389.727 448 314.187 448 224 448 100.205 347.815 0 224 0zm0 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z"></path>
        </svg>
        const googleIcon = <svg className="podcast__icon" viewBox="8 8 35 35" version="1.1" id="svg4658">
            <line stroke="currentColor" x1="24" y1="10.25" x2="24" y2="12.25" id="line4640" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line stroke="currentColor" x1="24" y1="35.75" x2="24" y2="37.75" id="line4642" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line stroke="currentColor" x1="24" y1="18.25" x2="24" y2="29.75" id="line4644" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line stroke="currentColor" x1="17" y1="16.5" x2="17" y2="23.5" id="line4646" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line stroke="currentColor" x1="17" y1="29.5" x2="17" y2="31.5" id="line4648" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line stroke="currentColor" x1="31" y1="24.5" x2="31" y2="31.5" id="line4650" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line stroke="currentColor" x1="31" y1="18.5" x2="31" y2="16.5" id="line4652" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line stroke="currentColor" x1="38" y1="23" x2="38" y2="25" id="line4654" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line stroke="currentColor" x1="10" y1="23" x2="10" y2="25" id="line4656" fill="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        const spotifyIcon = <svg aria-hidden="true" data-icon="spotify" viewBox="0 0 496 512" className="podcast__icon" xmlns="http://www.w3.org/2000/svg">
            <title>Spotify icon</title>
            <path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path>
        </svg>
        const rssIcon = <svg aria-hidden="true" data-icon="rss" viewBox="0 0 448 512" className="podcast__icon" xmlns="http://www.w3.org/2000/svg">
            <title>RSS icon</title>
            <path fill="currentColor" d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"></path>
        </svg>

        const metaProps = {
            title: 'The Sourcegraph Podcast',
            description: 'The Sourcegraph Podcast, conversations and stories from dev tool creators'
        }
        return  <Layout location={this.props.location} meta={{
            title: metaProps.title,
            description: metaProps.description
        }}>
            <ContentPage
            title="The Podcast🎙"
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    Conversations, stories, and insights from dev tool creators
                </div>
            }>
                <ContentSection color="black">
                    <div className="podcast">
                        <div className="pt-4 podcast__subscribe">
                            <span className="podcast__subscribe-highlight">Subscribe:</span>
                            <a target="_blank" href="https://podcasts.apple.com/us/podcast/the-sourcegraph-podcast/id1516219009" className="podcast__subscribe-option">
                                {appleIcon}&nbsp;Apple
                            </a>
                            <a target="_blank" href="#" className="podcast__subscribe-option">
                            {spotifyIcon}
                                &nbsp;Spotify
                            </a>
                            <a target="_blank" href="#" className="podcast__subscribe-option">
                                {googleIcon}&nbsp;Google
                            </a>
                            <a target="_blank" href="https://feeds.buzzsprout.com/1097978.rss" className="podcast__subscribe-option">
                                {rssIcon}&nbsp;RSS
                            </a>
                        </div>
                        <div className="podcast__episode">
                            <div className="podcast__title">Episode 1: Coming soon...</div>
                            <div className="podcast__people">Beyang Liu</div>
                            <div className="podcast__date">June 8, 2020</div>
                            <div className="podcast__description">We'll announce this episode in the next week.</div>
                        </div>
                        <div className="podcast__episode">
                            <div className="podcast__title">
                                Introducing The Sourcegraph Podcast
                            </div>
                            <div className="podcast__people">
                                Beyang Liu
                            </div>
                            <div className="podcast__date">
                                June 1, 2020
                            </div>
                            <div className="podcast__player">
                            <audio className="object-center" src="https://www.buzzsprout.com/1097978/3991271-introducing-the-sourcegraph-podcast.mp3" controls={true} preload="auto">
                            </audio>
                            </div>
                            <div className="podcast__description">
                                <p>
                                Welcome to the Sourcegraph podcast, a new show about developer tools and their creators. Over the next couple of weeks, we'll be publishing conversations with people we think are some of the best and brightest minds working on tools and infrastructure for developers. Here's a partial lineup:
                                </p>
                                <p>
                                <ul>
                                    <li><a target="_blank" href="https://twitter.com/lukehoban" className="podcast__description-emphasis">Luke Hoban</a>, co-founder and CTO of Pulumi, co-founder of TypeScript, formerly program manager at Microsoft</li>
                                    <li><a target="_blank" href="https://twitter.com/ryan0x44" className="podcast__description-emphasis">Ryan Djurovich</a>, dev tools and DevOps leader at Xero, formerly Cloudflare</li>
                                    <li><a target="_blank" href="https://twitter.com/mipsytipsy" className="podcast__description-emphasis">Charity Majors</a>, co-founder and CTO of Honeycomb, formerly infrastructure tech lead at Parse and Facebook</li>
                                    <li><a target="_blank" href="https://twitter.com/evanculver" className="podcast__description-emphasis">Evan Culver</a>, dev tools and infrastructure leader at Segment, formerly Uber</li>
                                    <li><a target="_blank" href="https://twitter.com/rvtond" className="podcast__description-emphasis">Rijnard van Tonder</a>, creator of Comby, formerly PhD researcher at CMU with stints at Microsoft Research and Facebook, now at Sourcegraph</li>
                                    <li><a target="_blank" href="https://twitter.com/zeeg" className="podcast__description-emphasis">David Cramer</a>, co-founder and CTO of Sentry, formerly SWE at Dropbox</li>
                                    <li><a target="_blank" href="https://twitter.com/cetico" className="podcast__description-emphasis">Yves Junqueira</a>, co-founder and CEO of YourBase, formerly SRE at Google</li>
                                    <li><a target="_blank" href="https://twitter.com/_johnewart" className="podcast__description-emphasis">John Ewart</a>, co-founder and CTO of YourBase, formerly SWE at Amazon</li>
                                    <li><a target="_blank" href="https://twitter.com/dbentley" className="podcast__description-emphasis">Dan Bentley</a>, founder and CEO of Tilt, formerly SWE at Google</li>
                                </ul>
                                </p>
                                <p>
                                    If you have ideas or suggestions for guests, <a target="_blank" href="https://twitter.com/srcgraph">hit us up on Twitter</a>. We're speaking to an audience of developers who love leveling up their productivity and, perhaps, who also aspire to create great dev tools themselves. If that's you, then subscribe! We look forward to sharing some insightful conversations with you over the next few weeks.
                                </p>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            </ContentPage>
        </Layout>
    }
}
