import React, { Component } from 'react';
import Article from "../components/article.js";

let articles = [
    {
        name: "Stuff to make old fols crazy",
        text: "Cornhole viral keytar, blue bottle tote bag dreamcatcher disrupt. Cray polaroid gluten-free fanny pack, succulents snackwave sriracha retro actually. Lo-fi shoreditch ramps, gochujang butcher iPhone taxidermy pinterest affogato. Bicycle rights tumblr meggings echo park man braid. Typewriter mumblecore tofu tumblr normcore. Hoodie gochujang prism aesthetic authentic raclette. Messenger bag whatever cardigan meh ramps. Kale chips hella bicycle rights tbh. Forage hoodie mixtape listicle, XOXO gochujang kinfolk gastropub franzen schlitz. Small batch offal banjo, poutine YOLO sriracha keytar slow-carb tbh tofu live-edge bespoke post-ironic. 8-bit dreamcatcher butcher raclette, you probably haven't heard of them cray kombucha. Umami meditation heirloom glossier."
    },
    {
        name: "Here's the deal Pickle!",
        text: "Cornhole viral keytar, blue bottle tote bag dreamcatcher disrupt. Cray polaroid gluten-free fanny pack, succulents snackwave sriracha retro actually. Lo-fi shoreditch ramps, gochujang butcher iPhone taxidermy pinterest affogato. Bicycle rights tumblr meggings echo park man braid. Typewriter mumblecore tofu tumblr normcore. Hoodie gochujang prism aesthetic authentic raclette. Messenger bag whatever cardigan meh ramps. Kale chips hella bicycle rights tbh. Forage hoodie mixtape listicle, XOXO gochujang kinfolk gastropub franzen schlitz. Small batch offal banjo, poutine YOLO sriracha keytar slow-carb tbh tofu live-edge bespoke post-ironic. 8-bit dreamcatcher butcher raclette, you probably haven't heard of them cray kombucha. Umami meditation heirloom glossier."
    },
    {
        name: "What's my Name",
        text: "Cornhole viral keytar, blue bottle tote bag dreamcatcher disrupt. Cray polaroid gluten-free fanny pack, succulents snackwave sriracha retro actually. Lo-fi shoreditch ramps, gochujang butcher iPhone taxidermy pinterest affogato. Bicycle rights tumblr meggings echo park man braid. Typewriter mumblecore tofu tumblr normcore. Hoodie gochujang prism aesthetic authentic raclette. Messenger bag whatever cardigan meh ramps. Kale chips hella bicycle rights tbh. Forage hoodie mixtape listicle, XOXO gochujang kinfolk gastropub franzen schlitz. Small batch offal banjo, poutine YOLO sriracha keytar slow-carb tbh tofu live-edge bespoke post-ironic. 8-bit dreamcatcher butcher raclette, you probably haven't heard of them cray kombucha. Umami meditation heirloom glossier."
    }
]

class ArticleContainer extends Component {
    render() {
        return (
            <div>
                <Article article={articles[this.props.match.params.index]} />
            </div>
        );
    }
}

export default ArticleContainer;