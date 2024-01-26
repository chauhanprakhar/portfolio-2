import nft from '../img/portImages/nft.png';
import web3 from '../img/portImages/web3.png';
import insta from '../img/portImages/insta.png';
import crypto from '../img/portImages/crypto.png';
import react from '../img/portImages/react.png';
import go from '../img/portImages/go.png';

const portfolios = [
    {
        id: 1,
        category: 'MERN',
        image: go,
        link1: 'https://github.com/chauhanprakhar/distributed-cache',
        link2: 'https://www.google.com',
        title: 'Distributed Cache in Go',
        text: 'Created using Go Language'
    },
    {
        id: 2,
        category: 'Web3',
        image: nft,
        link1: 'https://github.com/chauhanprakhar/OriginX---NFT-Marketplace',
        link2: 'https://www.google.com',
        title: 'An NFT Marketplace',
        text: 'Created with Reactjs, web3, IPFS, Truffle, and Solidity'
    },
    {
        id: 3,
        category: 'Web3',
        image: react,
        link1: 'https://github.com/chauhanprakhar/crowdfunding-blockchain',
        link2: 'https://www.google.com',
        title: 'A Decentralized Crowdfunding',
        text: 'Created with Reactjs, web3, Truffle, and Solidity'
    },
    {
        id: 4,
        category: 'React JS',
        image: crypto,
        link1: 'https://github.com/chauhanprakhar/cryptotracking',
        link2: 'https://www.google.com',
        title: 'CoinInfo',
        text: 'A cryptocurrency visualization web app made with React and chartjs'
    },
    {
        id: 5,
        category: 'MERN',
        image: insta,
        link1: 'https://github.com/chauhanprakhar/instagram-clone',
        link2: 'https://www.google.com',
        title: 'Instagram Clone',
        text: 'Created with Reactjs, Nodejs, Express, and MongoDB'
    },
    {
        id: 6,
        category: 'Web3',
        image: web3,
        link1: 'https://github.com/chauhanprakhar/decentralised_twitter',
        link2: 'https://www.google.com',
        title: 'Decentralized Twitter',
        text: 'Created with Reactjs, web3, Truffle, and Solidity'
    },
    {
        id: 7,
        category: 'React JS',
        image: react,
        link1: 'https://github.com/chauhanprakhar/2048',
        link2: 'https://www.google.com',
        title: '2048 Game',
        text: 'Created with Reactjs'
    }
    // {
    //     id: 7,
    //     category: 'CSS',
    //     image: web3,
    //     link1: 'https://www.google.com',
    //     link2: 'https://www.google.com',
    //     title: 'Microsoft Website Clone',
    //     text: 'Created using HTML and CSS'
    // }
]

export default portfolios;