import React, { useState, useMemo } from 'react';

import {
	Container,
	Grid,
	Card,
	CardContent,
	TextField,
	Button,
	Typography,
	InputAdornment,
	Slider
} from '@mui/material';

type ChangedProps = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type SetNumberState = React.Dispatch<React.SetStateAction<number>>;
type Vector = [[number, number], [number, number]];

const FingerBoxCreator = () => {
	const minTabSize = 3;

	const [length, setLength] = useState(115);
	const [width, setWidth] = useState(115);
	const [height, setHeight] = useState(115);
	const [tabSize, setTabSize] = useState(10);
	const [taper, setTaper] = useState(0.25);
	const [thickness, setThickness] = useState(3);

	const [errors, setErrors] = useState<Map<string, [boolean, string]>>(new Map());

	const [vectors, setVectors] = useState<Array<Vector>>([]);

	const tabsLength = useMemo(() => Math.floor(length / tabSize), [length, tabSize]);
	const tabsWidth = useMemo(() => Math.floor(width / tabSize), [width, tabSize]);
	const tabsHeight = useMemo(() => Math.floor(height / tabSize), [height, tabSize]);

	let CanvasHeightMM = useMemo(() => length + (height * 2) + 30, [length, height]);
	let CanvasWidthMM = useMemo(() => (Math.max(length, width, height) * 2) + 20, [length, width, height]);

	const maxTabSize = useMemo(() => Math.min(length, width, height) / 2, [length, width, height]);

	const validTabSizes = useMemo(() => {
		let values = [];
		let minValue = Math.min(length, width, height) / 2;
		for (let i = minTabSize; i <= minValue; i += 0.5) {
			const tabsLength = Math.floor(length / i);
			const tabsWidth = Math.floor(width / i);
			const tabsHeight = Math.floor(height / i);
			const evenTabError = tabsLength % 2 === 0 || tabsWidth % 2 === 0 || tabsHeight % 2 === 0;
			if (!evenTabError) values.push(i);
		}
		return values;
	}, [length, width, height]);

	const evenTabError = tabsLength % 2 === 0 || tabsWidth % 2 === 0 || tabsHeight % 2 === 0;

	const isError = (errorKey: string) => {
		let err = errors.get(errorKey);
		if (!err) return false;
		return err[0];
	};

	const errMsg = (errorKey: string) => {
		let err = errors.get(errorKey);
		if (!err) return "";
		return err[1];
	};

	const numberValueChanged = (change: SetNumberState, errorKey: string) => {
		return (value: ChangedProps) => {
			let parsedVal = parseFloat(value.target.value);
			if (isNaN(parsedVal)) {
				setErrors(err => err.set(errorKey, [true, "Needs to be a valid number. "]));
				return;
			}
			if (isError(errorKey))
				setErrors(err => err.set(errorKey, [false, ""]));
			change(parsedVal);
		};
	};

	const makeXSide = (
		from: number, 
		to: number, 
		x: number, 
		multiplyFactor: number = 1,
		oddInset: boolean = true, 
		insetSubtract: boolean = false,
		materialClipStart: boolean = false,
		materialClipEnd: boolean = false
	): Array<Vector> => {
		let noTabs = Math.floor(Math.abs(to - from) / tabSize);
		let remain = (Math.abs(from - to) % tabSize) / 2;
		let insetOn = oddInset ? 1 : 0;
		let inset = insetSubtract ? 0 - thickness : thickness;
		let startOffset = materialClipStart ? thickness : 0;
		let endOffset = materialClipEnd ? thickness : 0;

		let res = new Array<Vector>(noTabs)
			.fill([[0, 0], [0, 0]]);

		let initialInset = (x + (oddInset ? 0 : inset)) * multiplyFactor;
		res[0] = [[from + startOffset, initialInset], [(from + tabSize + remain + taper) * multiplyFactor, initialInset]];

		let initialOppositeInset = (x + (oddInset ? inset : 0)) * multiplyFactor;
		res.push([[(from + tabSize + remain + taper) * multiplyFactor, initialInset], [(from + tabSize + remain - taper) * multiplyFactor, initialOppositeInset]]);

		for (let i = 1; i < noTabs; i++) {
			let isInset = i % 2 === insetOn;
			let yVal = (x + (isInset ? inset : 0)) * multiplyFactor;
			let prevXVal = res[i - 1][1][0] - (taper * multiplyFactor);
			
			let xEndVal = prevXVal + ((tabSize + (i === noTabs - 1 ? remain - endOffset : taper)) * multiplyFactor);
			let xStartVal = prevXVal - (taper * multiplyFactor)
			res[i] = [[xStartVal, yVal], [xEndVal, yVal]];

			if (!(i === noTabs - 1)) {
				let yConnectorVal = (x + (isInset ? 0 : inset)) * multiplyFactor;
				let xConnectorVal = xEndVal - ((taper * 2) * multiplyFactor);
				res.push([[xEndVal, yVal], [xConnectorVal, yConnectorVal]]);
			}
		}
		return res;
	};

	const makeYSide = (
		from: number, 
		to: number, 
		y: number, 
		multiplyFactor: number = 1,
		oddInset: boolean = true, 
		insetSubtract: boolean = false,
		materialClipStart: boolean = false,
		materialClipEnd: boolean = false
	): Array<Vector> => {
		let noTabs = Math.floor(Math.abs(to - from) / tabSize);
		let remain = (Math.abs(from - to) % tabSize) / 2;
		let insetOn = oddInset ? 1 : 0;
		let inset = insetSubtract ? 0 - thickness : thickness;
		let startOffset = materialClipStart ? thickness : 0;
		let endOffset = materialClipEnd ? thickness : 0;

		let res = new Array<Vector>(noTabs)
			.fill([[0, 0], [0, 0]]);

		let initialInset = (y + (oddInset ? 0 : inset)) * multiplyFactor;
		res[0] = [[initialInset, from + startOffset], [initialInset, (from + tabSize + remain + taper) * multiplyFactor]];

		let initialOppositeInset = (y + (oddInset ? inset : 0)) * multiplyFactor;
		res.push([[initialInset, (from + tabSize + remain + taper) * multiplyFactor], [initialOppositeInset, (from + tabSize + remain - taper) * multiplyFactor]]);

		for (let i = 1; i < noTabs; i++) {
			let isInset = i % 2 === insetOn;
			let xVal = (y + (isInset ? inset : 0)) * multiplyFactor;
			let prevYVal = res[i - 1][1][1] - (taper * multiplyFactor);
			
			let yEndVal = prevYVal + ((tabSize + (i === noTabs - 1 ? remain - endOffset : taper)) * multiplyFactor);
			let yStartVal = prevYVal - (taper * multiplyFactor)
			res[i] = [[xVal, yStartVal], [xVal, yEndVal]];

			if (!(i === noTabs - 1)) {
				let xConnectorVal = (y + (isInset ? 0 : inset)) * multiplyFactor;
				let yConnectorVal = yEndVal - ((taper * 2) * multiplyFactor);
				res.push([[xVal, yEndVal], [xConnectorVal, yConnectorVal]]);
			}
		}
		return res;
	};

	const generateFrontBack = (xOffset: number, yOffset: number, multiplyFactor: number = 1) => {
		let line = makeYSide(yOffset, yOffset + height, xOffset, multiplyFactor);
		let line2 = makeYSide(yOffset, yOffset + height, xOffset + width, multiplyFactor, true, true);
		let line3 = makeXSide(xOffset, xOffset + width, yOffset, multiplyFactor);
		let line4 = makeXSide(xOffset, xOffset + width, yOffset + height, multiplyFactor, true, true);
		
		return [...line, ...line2, ...line3, ...line4];
	}

	const generateTopBottom = (xOffset: number, yOffset: number, multiplyFactor: number = 1) => {
		let line = makeYSide(yOffset, yOffset + length, xOffset, multiplyFactor, false, false, true, true);
		let line2 = makeYSide(yOffset, yOffset + length, xOffset + width, multiplyFactor, false, true, true, true);
		let line3 = makeXSide(xOffset, xOffset + width, yOffset, multiplyFactor, false, false, true, true);
		let line4 = makeXSide(xOffset, xOffset + width, yOffset + length, multiplyFactor, false, true, true, true);
		
		return [...line, ...line2, ...line3, ...line4];
	}

	const generateSides = (xOffset: number, yOffset: number, multiplyFactor: number = 1) => {
		let line = makeYSide(yOffset, yOffset + height, xOffset, multiplyFactor, false);
		let line2 = makeYSide(yOffset, yOffset + height, xOffset + length, multiplyFactor, false, true);
		let line3 = makeXSide(xOffset, xOffset + length, yOffset, multiplyFactor, true, false, true, true);
		let line4 = makeXSide(xOffset, xOffset + length, yOffset + height, multiplyFactor, true, true, true, true);
		
		return [...line, ...line2, ...line3, ...line4];
	}

	const generate = () => {
		let front = generateFrontBack(0, 0);
		let rear = generateFrontBack(width + 10, 0);

		let top = generateTopBottom(0, height + 10);
		let bottom = generateTopBottom(width + 10, height + 10);

		let left = generateSides(0, length + height + 20);
		let right = generateSides(length + 10, length + height + 20);

		setVectors([
			...front, 
			...rear, 
			...top, 
			...bottom, 
			...right, 
			...left
		]);
	};

	const makeSVGString = () => {
		let heightMM = length + (height * 2) + 30;
		let widthMM = (Math.max(length, width, height) * 2) + 20;
		let svgHeader = `\n	<g id="svgGroup" stroke-linecap="round" fill-rule="evenodd">`;
		let vecs = vectors.map(v => {
			let [[x1, y1], [x2, y2]] = v;
			return `		<line stroke-width="0.1" style="stroke-width:0.1" vector-effect="non-scaling-stroke" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
		}).join('\n');
		return `<svg  width="${CanvasWidthMM}mm" height="${CanvasHeightMM}mm" viewBox="0 0 ${widthMM} ${heightMM}" xmlns="http://www.w3.org/2000/svg" version="1.1">\n` 
			+ svgHeader
			+ vecs 
			+ `\n	</g>`
			+ "\n</svg>";
	};

	const downloadSvg = () => {
		var svgData = makeSVGString();
		var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
		var svgUrl = URL.createObjectURL(svgBlob);
		var downloadLink = document.createElement("a");
		downloadLink.href = svgUrl;
		downloadLink.download = "box.svg";
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}


	return <>
		<Grid item xs={12} sm={6} md={4}>
			<TextField
				fullWidth
				label="Length"
				size='small'
				inputProps={{ inputMode: 'decimal' }}
				value={length}
				error={isError("length")}
				helperText={errMsg("length")}
				onChange={numberValueChanged(setLength, "length")}
				InputProps={{
					endAdornment: <InputAdornment position="end">mm</InputAdornment>,
				}}
			/>
		</Grid>
		<Grid item xs={12} sm={6} md={4}>
			<TextField
				fullWidth
				label="Width"
				size='small'
				inputProps={{ inputMode: 'decimal' }}
				value={width}
				error={isError("width")}
				helperText={errMsg("width")}
				onChange={numberValueChanged(setWidth, "width")}
				InputProps={{
					endAdornment: <InputAdornment position="end">mm</InputAdornment>,
				}}
			/>
		</Grid>
		<Grid item xs={12} sm={6} md={4}>
			<TextField
				fullWidth
				label="Height"
				size='small'
				inputProps={{ inputMode: 'decimal' }}
				value={height}
				error={isError("height")}
				helperText={errMsg("height")}
				onChange={numberValueChanged(setHeight, "height")}
				InputProps={{
					endAdornment: <InputAdornment position="end">mm</InputAdornment>,
				}}
			/>
		</Grid>
		<Grid item xs={12} sm={6} md={2}>
			<TextField
				fullWidth
				label="Material Thickness"
				size='small'
				inputProps={{ inputMode: 'decimal' }}
				value={thickness}
				error={isError("thickness")}
				helperText={errMsg("thickness")}
				onChange={numberValueChanged(setThickness, "thickness")}
				InputProps={{
					endAdornment: <InputAdornment position="end">mm</InputAdornment>,
				}}
			/>
		</Grid>
		<Grid item xs={12} sm={6} md={2}>
			<TextField
				fullWidth
				label="Taper"
				size='small'
				inputProps={{ inputMode: 'decimal' }}
				value={taper}
				error={isError("deviation")}
				helperText={errMsg("deviation")}
				onChange={numberValueChanged(setTaper, "deviation")}
				InputProps={{
					endAdornment: <InputAdornment position="end">mm</InputAdornment>,
				}}
			/>
		</Grid>
		<Grid item xs={12} sm={6} md={4} spacing={2} container alignItems="center">
			<Grid item xs={12} container alignItems="center">
				<Typography>Tab size: {tabSize}mm</Typography>
				<Slider
					sx={{ marginX: 0.5 }}
					size="small"
					step={null}
					valueLabelDisplay="auto"
					marks={validTabSizes.map(v => ({ value: v, label: '' }))}
					value={tabSize}
					onChange={(e, v) => !Array.isArray(v) ? setTabSize(v) : {}}
					min={minTabSize}
					max={Math.max(...validTabSizes)}
				/>
			</Grid>
		</Grid>
		<Grid item xs={12} sm={6} md={2} container alignItems="center" justifyContent="flex-end">
			<Button
				size='small'
				variant="contained"
				onClick={generate}
				disabled={evenTabError}
				fullWidth={true}
			>
				Generate
			</Button>
		</Grid>
		<Grid item xs={12} sm={6} md={2} container alignItems="center" justifyContent="flex-end">
			<Button
				size='small'
				variant="contained"
				onClick={downloadSvg}
				disabled={vectors.length <= 0}
				fullWidth={true}
				color='secondary'
			>
				Download
			</Button>
		</Grid>
		<Grid item xs={12} container>
			<Typography variant="caption">
				Tabs length: {tabsLength} &nbsp;
				Tabs height: {tabsHeight} &nbsp;
				Tabs width: {tabsWidth} &nbsp;
				{evenTabError ? 
					<Typography variant="caption" color="secondary">
						MUST ALL BE ODD
					</Typography>
					: <></>
				}
			</Typography>
		</Grid>
		<Grid item xs={12} container justifyContent='center'>
		{vectors.length > 0 ? 
			<svg style={{ height: `${CanvasHeightMM}`, width: `${CanvasWidthMM}` }}>
				{
					vectors.map(v => {
						let [[x1, y1], [x2, y2]] = v;
						return <line 
							key={`x1${x1}y1${y1}x2${x2}y2${y2}`}
							x1={x1}
							y1={y1}
							x2={x2}
							y2={y2}
							style={{stroke: "rgb(255,0,0)", strokeWidth: 1}} 
						/>
					})
				}
			</svg> : <></>
		}
		</Grid>
	</>;
};


const HomePage = () => {

	return (
		<Container maxWidth="lg" disableGutters={true}>
			<Grid
				container
				justifyContent="center"
				sx={{ padding: 2 }}
				spacing={2}
			>
				<Grid item container md={11} xs={12}>
					<Card>
						<CardContent>
							<Grid spacing={2} alignItems="center" container>
								<FingerBoxCreator />
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomePage;
