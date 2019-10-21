import AppLayout from "components/appLayout"
import Header from "components/header"
import Timeline from "components/timeline"
import { Card, CardContainer } from "components/card"

let mockupUser = [
    {
        name: "Aom Khunpanitchot",
        facebookURL: "https://facebook.com/aomKhunpanitchot"
    },
    {
        name: "Ai Chan",
        facebookURL: "https://facebook.com/AiChan"
    },
    {
        name: "Tuna Kaslana",
        facebookURL: "https://facebook.com/Tuna"
    }
]

const Plan = () => {
	return (
		<AppLayout>
			<Header detail="Looking for some meetup">Planning</Header>
			<Timeline title="Today">
				<CardContainer>
					<Card users={mockupUser} time={new Date()}>Test</Card>
					<Card users={mockupUser} time={new Date()}>Test</Card>
					<Card users={mockupUser} time={new Date()}>Test</Card>
					<Card users={mockupUser} time={new Date()}>Test</Card>
					<Card users={mockupUser} time={new Date()}>Test</Card>
				</CardContainer>
			</Timeline>
			<Timeline title="Tomorrow" end>
				<CardContainer>
					<Card users={mockupUser} time={new Date()}>Test</Card>
					<Card users={mockupUser} time={new Date()}>Test</Card>
				</CardContainer>
			</Timeline>
		</AppLayout>
	)
}

export default Plan
