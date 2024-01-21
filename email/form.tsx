import React, {FC} from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'
import {Tailwind} from "@react-email/components";

type ContactFormEmailPropsType={
    message:string
    senderEmail:string
    phone:string
}

export const ContactFormEmail : FC<ContactFormEmailPropsType> = ({message,senderEmail,phone}) => {
    return<Html>
        <Head/>
        <Preview>New message from your X-IBIS site</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>
                            You received the following message from the contact form
                        </Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            The sender's email is: {senderEmail}
                        </Text>
                        <Hr/>
                        <Text>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Phone number is: {phone}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
};