import React, { Component } from 'react';
import logo from '@/assets/images/logo.svg';
import {
	Wrapper,
	Logo,
	Image,
	Nav,
	NavItems,
	NavItem,
	NavToggle,
	NavIcon,
} from './styles';
import { Content } from '@/shared/Content';
import { TertiaryButton } from '@/shared/buttons/styles';
import { mediaSizes } from '@/styles/media';

export class Header extends Component {
	mql = window.matchMedia(`(max-width: ${mediaSizes.large}px)`);

	state = {
		matches: this.mql.matches,
		open: !this.mql.matches,
	};

	componentDidMount() {
		this.mql.addListener(this.handleResize);
	}

	componentWillUnmount() {
		this.mql.removeListener(this.handleResize);
	}

	handleNavToggleClick = () => {
		this.setState(state => ({ open: !state.open }));
	};

	handleResize = event => {
		const isMatch = event.matches;
		this.setState({ open: !isMatch, matches: isMatch });
	};

	render() {
		const { open, matches } = this.state;

		return (
			<Content>
				<Wrapper>
					<Logo to="/">
						<Image src={logo} width="132" height="30" alt="Musicoin" />
					</Logo>
					<Nav>
						{matches && (
							<NavToggle onClick={this.handleNavToggleClick}>
								<NavIcon open={open} />
								Menu
							</NavToggle>
						)}
						<NavItems open={open}>
							<NavItem to="/musicians">Musicians</NavItem>
							<NavItem to="/discover">Discover</NavItem>
							<NavItem to="/how-it-works">How it works</NavItem>
							<NavItem to="/resources">Resources</NavItem>
							<NavItem to="/faq">FAQ</NavItem>
							<TertiaryButton to="/join">Log in / Sign up</TertiaryButton>
						</NavItems>
					</Nav>
				</Wrapper>
			</Content>
		);
	}
}