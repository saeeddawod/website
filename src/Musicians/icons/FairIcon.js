import React from 'react';
import { Icon } from '@/shared/icons';

export const FairIcon = props => (
	<Icon {...props}>
		<defs>
			<linearGradient
				x1="-2.67035231%"
				y1="68.9718881%"
				x2="91.1268802%"
				y2="60.1571697%"
				id="gradient"
			>
				<stop stopColor="#FECE00" offset="0%" />
				<stop stopColor="#FF9000" offset="100%" />
			</linearGradient>
		</defs>
		<path
			stroke="none"
			fill="url(#gradient)"
			fillRule="nonzero"
			d="M3 18.8730553C3 18.3891777 3.3922603 17.9969174 3.87613791 17.9969174L12.852654 17.9969174C13.3340946 18.0003441 13.7225683 18.3916026 13.7225561 18.8730553 13.7225561 20.7884555 12.7007023 22.5583583 11.0419171 23.5160584 9.38313189 24.4737585 7.33942421 24.4737585 5.68063899 23.5160584 4.02185377 22.5583583 2.99999996 20.7884555 3 18.8730553ZM8.35971908 9.47250093C8.03027269 9.4756704 7.72544862 9.64750173 7.5521756 9.92771849L4.01956262 15.5680511C3.83432731 15.8665044 3.82498086 16.2417979 3.99513016 16.5491018 4.16527946 16.8564056 4.48831654 17.0476636 4.83957781 17.0490672 4.91303031 17.0488884 4.986234 17.0405223 5.05783281 17.0241237 5.3076848 16.9664907 5.52425552 16.811637 5.65959301 16.5938496L8.35971908 12.2692828 11.0598452 16.5938496C11.3431116 17.0475925 11.9405757 17.185791 12.3943186 16.9025245 12.8480614 16.6192581 12.9862599 16.021794 12.7029935 15.5680511L9.18285221 9.92771849C9.00622287 9.64324888 8.69455978 9.47088974 8.35971908 9.47250093ZM24.5355321 16.840166C24.9901987 17.1221903 25.587375 16.9826631 25.8700055 16.5283731L28.5701316 12.2038063 31.2702577 16.5283731C31.4534989 16.8218933 31.779412 16.9953591 32.1252285 16.9834276 32.4710451 16.9714961 32.7842274 16.77598 32.9468027 16.4705284 33.109378 16.1650767 33.0966472 15.7960948 32.913406 15.5025746L29.3776751 9.86847785C29.2003399 9.58561 28.8899601 9.41386226 28.5561009 9.41386226 28.2222417 9.41386226 27.9118619 9.58561 27.7345268 9.86847785L24.2268572 15.5056926C23.9442651 15.9595478 24.0823458 16.5565025 24.5355321 16.840166ZM33.0537128 17.9376768L24.0771966 17.9376768C23.593319 17.9376768 23.2010587 18.3299371 23.2010587 18.8138147 23.2010587 21.7739058 25.6006867 24.1735338 28.5607778 24.1735338 31.5208689 24.1735338 33.9204969 21.7739058 33.9204969 18.8138147 33.9205243 18.3335666 33.5339335 17.942804 33.0537128 17.9376768ZM19.4003039 10.3922898L19.4003039 22.6675743C23.1091333 23.1408054 25.8905278 26.2932304 25.8980669 30.0321214 25.8980669 30.7019733 25.3550446 31.2449956 24.6851927 31.2449956L12.244658 31.2449956C11.5748061 31.2449956 11.0317838 30.7019733 11.0317838 30.0321214 11.0394373 26.3280607 13.7708724 23.1938884 17.4391269 22.680046L17.4391269 10.3642285C16.3725446 10.008995 15.5634624 9.13042823 15.29711 8.03825382L5.18566788 8.03825382C4.6544357 8.03825382 4.22378693 7.60760505 4.22378693 7.07637288 4.22378693 6.5451407 4.6544357 6.11449194 5.18566788 6.11449194L15.4124733 6.11449194C15.8892776 4.8426342 17.1050717 4 18.4633664 4 19.821661 4 21.0374551 4.8426342 21.5142594 6.11449194L31.7441828 6.11449194C32.275415 6.11449194 32.7060637 6.5451407 32.7060637 7.07637288 32.7060637 7.60760505 32.275415 8.03825382 31.7441828 8.03825382L21.6327407 8.03825382C21.358195 9.16302366 20.508946 10.0585306 19.4003039 10.3922898ZM19.7962808 7.27436134C19.7987874 6.72914341 19.4716163 6.23644835 18.9681314 6.02723095 18.4646466 5.81801356 17.8846505 5.93374557 17.500021 6.32017666 17.1153914 6.70660775 17.0023709 7.28713834 17.2139387 7.78964001 17.4255066 8.29214169 17.9197251 8.61700698 18.4649253 8.61195266 19.2071006 8.61195266 19.8087525 8.01030074 19.8087525 7.26812548L19.7962808 7.27436134Z"
		/>
	</Icon>
);
