import React, { Component } from 'react'
import Banner from '../Banner'
import CardItem from '../body/CardItem'

export default class Body extends Component {
    render() {
        let listCard = [
            {
                header: "Fresh new layout",
                content: "With Bootstrap 5, we've created a fresh new layout for this template!",
                icon: "bi bi-collection"
            },
            {
                header: "Free to download",
                content: "As always, Start Bootstrap has a powerful collectin of free templates.",
                icon: "bi bi-cloud-download"
            },
            {
                header: "Jumbotron hero header",
                content: "The heroic part of this template is the jumbotron hero header!",
                icon: "bi bi-card-heading"
            },
            {   header: "Feature boxes",
                content: "We've created some custom feature boxes using Bootstrap icons!",
                icon: "bi bi-bootstrap"
            },
            {   header: "Simple clean code",
                content: "We keep our dependencies up to date and squash bugs as they come!",
                icon: "bi bi-code"
            },
            {   header: "A name you trust",
                content: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
                icon: "bi bi-patch-check"
            }
        ]

        let lstItem = listCard.map(obj => {
            return <CardItem header={obj.header} iconClass={obj.icon} content={obj.content} />
        });
        return (
            <div>
                {/* Banner */}
                <Banner header = "A warm welcome!" textContent = "Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?" buttonContent = "Call to action"/>
                {/* List Item */}
                <section className="pt-4">
                    <div className="container px-lg-5">
                        <div className="row gx-lg-5">
                            {lstItem}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
