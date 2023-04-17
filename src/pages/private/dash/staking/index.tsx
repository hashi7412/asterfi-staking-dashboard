import React from "react";
import Heading from "elements/heading";
import Text from "elements/text";
import { Box } from "elements";
import FBox from "elements/fbox";
import { BasicVar, FontSize } from "styles/variables";

const Staking = () => {
	return (
		<React.Fragment>
			<Heading
				level={2}
			>
				Staking
			</Heading>
			<Text mb={'1rem'}>Stake your Asterfi to earn $APE</Text>
			<Box
				bg={BasicVar.bg2.label}
				bdradius={BasicVar.bRadius2.label}
				p={'1.5rem 2rem'}
			>
				<FBox>
					<FBox fDir={'column'} tAlign={'left'}>
						<Text color={BasicVar.color2.label}>Total Supply</Text>
						<Text
							fFamily={BasicVar.font3.value}
							fSize={FontSize.fSize3.value}
						>8</Text>
					</FBox>
					<FBox fDir={'column'} tAlign={'center'}>
						<Text color={BasicVar.color2.label}>Total Locked Supply(TLS)</Text>
						<Text>6</Text>
					</FBox>
					<FBox fDir={'column'} tAlign={'right'}>
						<Text color={BasicVar.color2.label}>Market Cap</Text>
						<Text>$<Text>38.9786</Text>.59</Text>
					</FBox>
				</FBox>
			</Box>
		</React.Fragment>
	)
}

export default Staking;
