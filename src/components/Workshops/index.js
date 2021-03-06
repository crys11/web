import React from "react"
import EventsCard from "../EventsCard"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { isMobile } from "react-device-detect"
import "./style.scss"

const Workshops = ({ events, skills, width, breakpoint }) => {
    const [currentIndex, setSlide] = React.useState(3);
    return <>
        <div className="carousel-outer workshops">
            <Carousel
                className="mt-5"
                centerMode
                showArrows={true}
                showStatus={false}
                swipeScrollTolerance={0}
                interval={3000}
                transitionTime={150}
                showIndicators={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                swipeable={true}
                width={2000}
                centerSlidePercentage={18.5}
                selectedItem={currentIndex}
            >
                    { events.map(ev => <EventsCard
                            ev={ev.rsvp_url}
                            date={ev.event_date}
                            time={ev.event_start_time}
                            eventName={ev.event_title}
                            speakerName={ev.speaker_name}
                            eventImage={ev.event_img_file_path}
                            companyImage={ev.company_logo_file_path}
                            speakerPosition={ev.speaker_job_title.toString()}
                            url={ev.rsvp_url}
                            comingFrom={ev.event_organizer}
                        />)
                    }
                </Carousel>
            </div>
    </>;
}

export default Workshops;