"use client"
import Image from 'next/image'
import kiriAtas from '@/asset/resultImage/kiri_atas.png'
import kiriTengah from '@/asset/resultImage/kiri_tengah.png'
import kiriBawah from '@/asset/resultImage/kiri_bawah.png'
import kananAtas from '@/asset/resultImage/kanan_atas.png'
import kananTengah from '@/asset/resultImage/kanan_tengah.png'
import kananBawah from '@/asset/resultImage/kanan_bawah.png'
import tengahAtas from '@/asset/resultImage/tengah_atas.png'
import tengahTengah from '@/asset/resultImage/tengah_tengah.png'
import tengahBawah from '@/asset/resultImage/tengah_bawah.png'
import { resultState } from '@/states/resultState'
import { assessmentState } from '@/states/assessmentState'

export default function Result40() {
  resultState((state)=>console.log(state))
  assessmentState((state) => console.log(state))

  const [warna40, warna18, warna6, warna3] = resultState((state) => [state.warna40, state.warna18, state.warna6, state.warna3])
  const [warna40hex, warna18hex, warna6hex, warna3hex] = resultState((state) => [state.warna40hex, state.warna18hex, state.warna6hex, state.warna3hex])
  const [pilar40Array, ranks, ranks18, ranks6, ranks3, pilar6Array, pilar3Array] = assessmentState((state) => ([state.pilar40Array, state.ranks, state.ranks18, state.ranks6, state.ranks3, state.pilar6Array, state.pilar3Array]))

  return (
    <div className='border'>
      <div className='flex justify-around'>
      {/* <?xml version="1.0" encoding="UTF-8"?> */}
        <svg id="svg371" clip-rule="evenodd" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="1.5" version="1.1" viewBox="0 0 2481 2406"  
            xmlns="http://www.w3.org/2000/svg">
            <defs id="defs375">
                <marker id="marker4" overflow="visible" markerHeight="1" markerWidth="1" orient="auto-start-reverse"
                    preserveAspectRatio="xMidYMid" viewBox="0 0 1 1">
                    <path id="path4" transform="scale(.5)" d="m5.77 0-8.65 5v-10z" fill="context-stroke" fill-rule="evenodd"
                        stroke="context-stroke" stroke-width="1pt" />
                </marker>
                <marker id="Triangle" overflow="visible" markerHeight="1" markerWidth="1" orient="auto-start-reverse"
                    preserveAspectRatio="xMidYMid" viewBox="0 0 1 1">
                    <path id="path135" transform="scale(.5)" d="m5.77 0-8.65 5v-10z" fill="context-stroke" fill-rule="evenodd"
                        stroke="context-stroke" stroke-width="1pt" />
                </marker>
                <clipPath id="clipEmfPath1">
                    <path id="path2322" d="m183.68 29.145h84.047v161.99h-84.047z" />
                </clipPath>
                <clipPath id="clipEmfPath1-6">
                    <path id="path1-2" d="m14.911 70.491h82.691v115.9h-82.691z" />
                </clipPath>
                <clipPath id="clipEmfPath2-4">
                    <path id="path2-9" d="m15.589 71.169h82.013v115.23h-82.013z" />
                </clipPath>
                <clipPath id="clipEmfPath3">
                    <path id="path3" d="m15.589 140.3h81.335v22.367h-81.335z" />
                </clipPath>
                <clipPath id="clipEmfPath1-2">
                    <path id="path1-0" d="m183.68 31.856h84.047v185.04h-84.047z" />
                </clipPath>
                <marker id="Triangle-8" overflow="visible" markerHeight="1" markerWidth="1" orient="auto-start-reverse"
                    preserveAspectRatio="xMidYMid" viewBox="0 0 1 1">
                    <path id="path135-5" transform="scale(.5)" d="m5.77 0-8.65 5v-10z" fill="context-stroke" fill-rule="evenodd"
                        stroke="context-stroke" stroke-width="1pt" />
                </marker>
                <marker id="marker4-2" overflow="visible" markerHeight="1" markerWidth="1" orient="auto-start-reverse"
                    preserveAspectRatio="xMidYMid" viewBox="0 0 1 1">
                    <path id="path4-4" transform="scale(.5)" d="m5.77 0-8.65 5v-10z" fill="context-stroke" fill-rule="evenodd"
                        stroke="context-stroke" stroke-width="1pt" />
                </marker>
            </defs>
            <rect id="2.2" x="1403.8" y="24.042" width="963.63" height="2308.8" rx="35" ry="35" fill="#91c483"
                fill-opacity=".31" stroke-width="1.7488" />
            <rect id="2.1" x="112.87" y="24.042" width="963.63" height="2308.8" rx="35" ry="35" fill="#91c483"
                fill-opacity=".31" stroke-width="1.7488" />
            <rect id="Artboard1" width="2480.3" height="2405.2" fill="none" />
            <rect id="3.1" x="1145.3" y="492.49" width="189.73" height="78.416" ry="20" fill={'#'+warna3hex(ranks3[0])} />
            <rect id="3.2" x="1145.3" y="1273.6" width="189.73" height="78.416" ry="30" fill={'#'+warna3hex(ranks3[1])}  />
            <rect id="3.3" x="1145.3" y="2054.7" width="189.73" height="78.416" ry="30" fill={'#'+warna3hex(ranks3[2])}  />
            <rect id="6.1" x="840.44" y="492.49" width="189.73" height="78.416" ry="30" fill={'#'+warna6hex(ranks6[0])} />
            <rect id="6.4" x="1450.2" y="492.49" width="189.73" height="78.416" ry="30" fill={'#'+warna6hex(ranks6[3])} />
            <rect id="6.5" x="1450.2" y="1273.6" width="189.73" height="78.416" ry="30" fill={'#'+warna6hex(ranks6[4])} />
            <rect id="6.2" x="840.44" y="1273.6" width="189.73" height="78.416" ry="30" fill={'#'+warna6hex(ranks6[1])} />
            <rect id="6.6" x="1450.2" y="2054.7" width="189.73" height="78.416" ry="30" fill={'#'+warna6hex(ranks6[5])} />
            <rect id="6.3" x="840.44" y="2054.7" width="189.73" height="78.416" ry="30" fill={'#'+warna6hex(ranks6[2])} />
            <rect id="18" x="1870.1" y="58.552" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[35-1])} />
            <rect id="1" x="420.46" y="58.552" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[13-1])} />
            <path id="18.10"
                d="m1820.7 58.552h29.128v251.99h-29.128a29.128 29.128 45 0 1-29.128-29.128v-193.74a29.128 29.128 135 0 1 29.128-29.128z"
                fill={'#'+warna18hex(ranks18[9])} />
            <path id="18.11"
                d="m1820.7 318.92h29.128v165.2h-29.128a29.128 29.128 45 0 1-29.128-29.128v-106.95a29.128 29.128 135 0 1 29.128-29.128z"
                fill={'#'+warna18hex(ranks18[10])} />
            <path id="18.01" x="630.44897" y="58.552002" width="58.256001" height="165.20399"
                d="m630.45 58.552h29.128a29.128 29.128 45 0 1 29.128 29.128v106.95a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[0])} />
            <path id="18.02" x="630.44897" y="232.12799" width="58.256001" height="165.20399"
                d="m630.45 232.13h29.128a29.128 29.128 45 0 1 29.128 29.128v106.95a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[1])} />
            <path id="18.03"
                d="m630.45 405.7h29.128a29.128 29.128 45 0 1 29.128 29.128v106.95a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[2])} />
            <path id="path53"
                d="m659.58 579.28h-29.128v78.417h29.128a29.128 29.128 135 0 0 29.128-29.128v-20.161a29.128 29.128 45 0 0-29.128-29.128zm24.904 29.085v20.204a24.904 24.904 135 0 1-24.904 24.904h-24.904v-69.969h24.947a24.861 24.861 45 0 1 24.861 24.861z"
                fill="#838fc4" />
            <path id="18.12"
                d="m1820.7 492.49h29.128v165.2h-29.132a29.124 29.124 45 0 1-29.124-29.124v-106.95a29.128 29.128 135 0 1 29.128-29.128z"
                fill={'#'+warna18hex(ranks18[11])} />
            <path id="18.13"
                d="m1820.7 752.86h29.123v338.78h-29.128a29.128 29.128 45 0 1-29.128-29.128v-280.52a29.133 29.133 135 0 1 29.133-29.133z"
                fill={'#'+warna18hex(ranks18[12])} />
            <path id="18.18"
                d="m1820.7 1881.1h29.128v338.78h-29.128a29.128 29.128 45 0 1-29.128-29.128v-280.52a29.128 29.128 135 0 1 29.128-29.128z"
                fill={'#'+warna18hex(ranks18[17])} />
            <path id="18.14"
                d="m1820.7 1100h29.128v165.2h-29.128a29.128 29.128 45 0 1-29.128-29.128v-106.95a29.128 29.128 135 0 1 29.128-29.128z"
                fill={'#'+warna18hex(ranks18[13])} />
            <path id="18.04"
                d="m630.45 926.43h29.128a29.128 29.128 45 0 1 29.128 29.128v106.95a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[3])} />
            <path id="path65"
                d="m659.68 752.86h-29.235v165.2h29.128a29.128 29.128 135 0 0 29.128-29.128v-107.06a29.021 29.021 45 0 0-29.021-29.021zm24.797 29.128v106.95a24.904 24.904 135 0 1-24.904 24.904h-24.904v-156.76h24.904a24.904 24.904 45 0 1 24.904 24.904z"
                fill="#838fc4" />
            <path id="path67"
                d="m659.58 1534h-29.128v165.2h29.128a29.128 29.128 135 0 0 29.128-29.128v-106.95a29.128 29.128 45 0 0-29.128-29.128zm24.904 29.128v106.95a24.904 24.904 135 0 1-24.904 24.904h-24.904v-156.76h24.904a24.904 24.904 45 0 1 24.904 24.904z"
                fill="#838fc4" />
            <path id="18.06"
                d="m630.45 1186.8h29.128a29.128 29.128 45 0 1 29.128 29.128v106.95a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[5])} />
            <path id="18.09"
                d="m630.45 1967.9h29.128a29.128 29.128 45 0 1 29.128 29.128v193.74a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[8])} />
            <path id="18.08"
                d="m630.45 1794.3h29.128a29.128 29.128 45 0 1 29.128 29.128v106.95a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[7])} />
            <path id="18.05"
                d="m630.45 1100h29.128a29.128 29.128 45 0 1 29.128 29.128v20.16a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[4])} />
            <path id="18.07"
                d="m630.45 1707.5h29.128a29.128 29.128 45 0 1 29.128 29.128v20.16a29.128 29.128 135 0 1-29.128 29.128h-29.128z"
                fill={'#'+warna18hex(ranks18[6])} />
            <path id="path79"
                d="m659.58 1360.4h-29.128v78.417h29.128a29.128 29.128 135 0 0 29.128-29.128v-20.161a29.128 29.128 45 0 0-29.128-29.128zm24.904 29.129v20.16a24.904 24.904 135 0 1-24.904 24.904h-24.904v-69.968h24.904a24.904 24.904 45 0 1 24.904 24.904z"
                fill="#838fc4" />
            <path id="18.17"
                d="m1820.7 1707.5h29.128v165.2h-29.128a29.128 29.128 45 0 1-29.128-29.128v-106.95a29.128 29.128 135 0 1 29.128-29.128z"
                fill={'#'+warna18hex(ranks18[16])} />
            <path id="18.15"
                d="m1820.7 1273.6h29.128v165.2h-29.132a29.124 29.124 45 0 1-29.124-29.124v-106.95a29.128 29.128 135 0 1 29.128-29.128z"
                fill={'#'+warna18hex(ranks18[14])} />
            <path id="18.16"
                d="m1820.7 1534h29.128v165.2h-29.128a29.128 29.128 45 0 1-29.128-29.128v-106.95a29.128 29.128 135 0 1 29.128-29.128z"
                fill={'#'+warna18hex(ranks18[15])} />
            <rect id="25" x="1870.1" y="752.86" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[36-1])} />
            <path id="path89" d="m610.19 752.86h-189.73v78.416h189.73zm-4.224 4.224v69.968h-181.28v-69.968z" fill="#838fc4" />
            <rect id="33" x="1870.1" y="1534" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[29-1])} />
            <path id="path93" d="m610.19 1534h-189.73v78.416h189.73zm-4.224 4.224v69.968h-181.28v-69.968z" fill="#838fc4" />
            <rect id="19" x="1870.1" y="145.34" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[9-1])} />
            <rect id="2" x="420.46" y="145.34" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[16-1])} />
            <rect id="26" x="1870.1" y="839.65" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[38-1])} />
            <path id="path101" d="m610.19 839.64h-189.73v78.416h189.73zm-4.224 4.224v69.968h-181.28v-69.968z" fill="#838fc4" />
            <rect id="34" x="1870.1" y="1620.7" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[17-1])} />
            <path id="path105" d="m610.19 1620.7h-189.73v78.416h189.73zm-4.224 4.224v69.968h-181.28v-69.968z" fill="#838fc4" />
            <rect id="20" x="1870.1" y="232.13" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[22-1])}/>
            <rect id="3" x="420.46" y="232.13" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[18-1])} />
            <rect id="27" x="1870.1" y="926.43" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[1-1])} />
            <rect id="7" x="420.46" y="926.43" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[8-1])} />
            <rect id="35" x="1870.1" y="1707.5" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[20-1])} />
            <rect id="12" x="420.46" y="1707.5" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[34-1])} />
            <rect id="21" x="1870.1" y="318.92" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[24-1])} />
            <rect id="4" x="420.46" y="318.92" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[40-1])} />
            <rect id="28" x="1870.1" y="1013.2" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[39-1])} />
            <rect id="8" x="420.46" y="1013.2" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[26-1])} />
            <rect id="36" x="1870.1" y="1794.3" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[31-1])} />
            <rect id="13" x="420.46" y="1794.3" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[15-1])} />
            <rect id="22" x="1870.1" y="405.7" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[7-1])} />
            <rect id="5" x="420.46" y="405.7" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[4-1])} />
            <rect id="29" x="1870.1" y="1100" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[23-1])} />
            <rect id="9" x="420.46" y="1100" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[14-1])} />
            <rect id="37" x="1870.1" y="1881.1" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[2-1])} />
            <rect id="14" x="420.46" y="1881.1" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[33-1])} />
            <rect id="23" x="1870.1" y="492.49" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[27-1])} />
            <rect id="6" x="420.46" y="492.49" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[25-1])} />
            <rect id="30" x="1870.1" y="1186.8" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[5-1])} />
            <rect id="10" x="420.46" y="1186.8" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[6-1])} />
            <rect id="38" x="1870.1" y="1967.9" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[3-1])} />
            <rect id="15" x="420.46" y="1967.9" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[10-1])} />
            <rect id="24" x="1870.1" y="579.28" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[19-1])} />
            <path id="path157" d="m610.19 579.28h-189.73v78.417h189.73zm-4.224 4.224v69.969h-181.28v-69.969z" fill="#838fc4" />
            <rect id="31" x="1870.1" y="1273.6" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[30-1])} />
            <rect id="11" x="420.46" y="1273.6" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[11-1])} />
            <rect id="39" x="1870.1" y="2054.7" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[12-1])} />
            <rect id="16" x="420.46" y="2054.7" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[28-1])} />
            <rect id="32" x="1870.1" y="1360.4" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[21-1])} />
            <path id="path169" d="m610.19 1360.4h-189.73v78.417h189.73zm-4.224 4.225v69.968h-181.28v-69.968z" fill="#838fc4" />
            <rect id="40" x="1870.1" y="2141.5" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[32-1])} />
            <rect id="17" x="420.46" y="2141.5" width="189.73" height="78.416" fill={'#'+warna40hex(ranks[37-1])} />
            <path id="path179" d="m1660.1 531.7c96.381 0 1.127-347.15 115.12-347.15" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path181" d="m820.18 531.7c-96.381 0-1.127-390.55-115.12-390.55" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path183" d="m820.18 1312.8c-96.381 0-1.127-303.76-115.12-303.76" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path185" d="m820.18 1312.8c-94.782 0-1.127-173.58-115.12-173.58" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path187" d="m820.18 1312.8c-52.396 0-1.127-43.394-115.12-43.394" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path189" d="m820.18 2093.9c-96.381 0-1.127-347.15-115.12-347.15" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path191" d="m820.18 2093.9c-90.751 0-1.127-216.97-115.12-216.97" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path193" d="m820.18 2093.9h-115.12" fill="none" stroke="#838fc4" stroke-width="6.75px" />
            <path id="path195" d="m820.18 531.7c-61.986 0-1.127-43.394-115.12-43.394" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path197" d="m820.18 531.7c-94.334 0-1.127-216.97-115.12-216.97" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path199" d="m1660.1 1312.8c96.381 0 1.127-390.55 115.12-390.55" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path201" d="m1660.1 2093.9c96.381 0 1.127-477.33 115.12-477.33" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path203" d="m1660.1 2093.9c96.381 0 1.127-43.394 115.12-43.394" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path205" d="m1660.1 2093.9c94.87 0 1.127-303.76 115.12-303.76" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path207" d="m1660.1 1312.8c81.026 0 1.127-130.18 115.12-130.18" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path209" d="m1660.1 1312.8c96.381 0 1.127 43.394 115.12 43.394" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path211" d="m1660.1 531.7c82.37 0 1.127-130.18 115.12-130.18" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <path id="path213" d="m1660.1 531.7c96.381 0 1.127 43.394 115.12 43.394" fill="none" stroke="#838fc4"
                stroke-width="6.75px" />
            <g id="g147" transform="translate(0,-100)">
                <g id="g145">
                    <path id="path219" d="m1417.8 2178.7 20.259 15.193-20.259 15.194z" fill="#838fc4" />
                    <path id="path221" d="m1347.1 2193.9h74.757" fill="none" stroke="#838fc4" stroke-width="6.75px" />
                </g>
                <g id="g146">
                    <path id="path231" d="m1062.5 2209.1-20.259-15.194 20.259-15.193z" fill="#838fc4" />
                    <path id="path233" d="m1133.2 2193.9h-74.757" fill="none" stroke="#838fc4" stroke-width="6.75px" />
                </g>
            </g>
            <g id="g241" transform="translate(.0075217 -148)" fill-rule="nonzero">
                <path id="path235"
                    d="m1515.2 1999.6h64.948c-4.427-10.531-13.732-18.708-25.145-21.129 0.509-1.062 0.818-2.237 0.818-3.491 0-4.492-3.655-8.147-8.147-8.147s-8.146 3.655-8.146 8.147c0 1.254 0.308 2.429 0.817 3.491-11.413 2.421-20.718 10.598-25.145 21.129zm32.474-27.336c1.498 0 2.716 1.217 2.716 2.716 0 1.498-1.218 2.715-2.716 2.715s-2.715-1.217-2.715-2.715c0-1.499 1.217-2.716 2.715-2.716z" />
                <path id="path237"
                    d="m1591.4 2005h-87.077v2.716c0 4.499 3.647 8.146 8.147 8.146h70.784c4.499 0 8.146-3.647 8.146-8.146z" />
                <path id="path239"
                    d="m1521.9 2053.5c1.543-1.358 3.588-2.079 5.585-2.031l27.189 0.652 26.423-24.901-1.993-1.993c-2.756-2.748-7.135-2.941-10.131-0.456l-15.426 12.799h-22.103v-5.431h19.009v-2.715c0-4.499-3.648-8.147-8.147-8.147h-15.033c-3.625 0-7.036 1.414-9.624 4.002l-18.972 19.266 16.782 14.93z" />
            </g>
            <g id="g143" transform="translate(0,-148)">
                <g id="g253">
                    <g id="g251">
                        <g id="g144">
                            <g id="g247" clip-rule="evenodd" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"
                                stroke-miterlimit="1.5">
                                <g id="g245">
                                    <path id="path243"
                                        d="m972.63 2001.5c-0.268-19.163-15.94-34.668-35.165-34.668-13.345 0-25.269 7.489-31.213 18.932 3.811 0.028 7.537 1.021 10.824 2.853 3.335-1.859 7.122-2.856 10.991-2.856 6.025 0 11.689 2.346 15.95 6.607 4.255 4.255 6.598 9.919 6.598 15.949 0 6.031-2.343 11.695-6.598 15.95l-26.941 26.941-2.715-2.715v11.023h41.41v-15.984h16.862v-17.904h9.016z"
                                        fill-rule="nonzero" />
                                </g>
                            </g>
                            <path id="path249"
                                d="m940.18 1996.2c-3.235-3.235-7.535-5.016-12.11-5.016-4.065 0-7.914 1.407-10.991 3.991-3.077-2.584-6.926-3.991-10.991-3.991-4.575 0-8.875 1.781-12.11 5.016-3.234 3.235-5.016 7.535-5.016 12.109 0 4.575 1.782 8.875 5.016 12.11l23.101 23.101 23.101-23.101c6.677-6.677 6.677-17.542 0-24.219z"
                                fill-rule="nonzero" />
                        </g>
                    </g>
                </g>
            </g>
            <clipPath id="_clip1">
                <rect id="_007-friendship.svg" x="1498.7" y="1185.8" width="92.681" height="92.681"/>
            </clipPath>
            <g id="g305" transform="translate(.0054998 -148)" clip-path="url(#_clip1)">
                <g id="g261">
                    <g id="g259">
                        <path id="path257" d="m1534.2 1207.5v70.958h8.145v-32.945h5.431v32.945h8.146v-70.958z"
                            fill-rule="nonzero" />
                    </g>
                </g>
                <g id="g267">
                    <g id="g265">
                        <circle id="circle263" cx="1520.6" cy="1193.9" r="8.146" />
                    </g>
                </g>
                <g id="g273">
                    <g id="g271">
                        <circle id="circle269" cx="1545" cy="1193.9" r="8.146" />
                    </g>
                </g>
                <g id="g279">
                    <g id="g277">
                        <circle id="circle275" cx="1569.4" cy="1193.9" r="8.146" />
                    </g>
                </g>
                <g id="g285">
                    <g id="g283">
                        <path id="path281"
                            d="m1504.3 1218.3h-5.612v10.861h5.612c2.999 0 5.43-2.432 5.43-5.431 1e-3 -2.999-2.431-5.43-5.43-5.43z"
                            fill-rule="nonzero" />
                    </g>
                </g>
                <g id="g291">
                    <g id="g289">
                        <path id="path287"
                            d="m1517.9 1207.5c-4.578 0-8.606 2.281-11.065 5.752 4.777 1.139 8.35 5.417 8.35 10.539 0 5.99-4.871 10.861-10.861 10.861v13.577c0 1.499 1.216 2.715 2.715 2.715v27.514h8.146v-32.945h5.43v32.945h8.146v-70.958z"
                            fill-rule="nonzero" />
                    </g>
                </g>
                <g id="g297">
                    <g id="g295">
                        <path id="path293" d="m1585.7 1218.3c-3 0-5.431 2.431-5.431 5.43s2.432 5.431 5.431 5.431h5.611v-10.861z"
                            fill-rule="nonzero" />
                    </g>
                </g>
                <g id="g303">
                    <g id="g301">
                        <path id="path299"
                            d="m1574.9 1223.8c0-5.122 3.572-9.399 8.35-10.539-2.46-3.471-6.488-5.752-11.066-5.752h-10.861v70.958h8.146v-32.945h5.431v32.945h8.145v-27.514c1.5 0 2.716-1.216 2.716-2.715v-13.577c-5.99 0-10.861-4.871-10.861-10.861z"
                            fill-rule="nonzero" />
                    </g>
                </g>
            </g>
            <clipPath id="_clip2">
                <rect id="_006-mind-settings.svg" x="888.96" y="1185.7" width="92.689" height="92.689"
                    />
            </clipPath>
            <g id="g317" transform="translate(0,-148)" clip-path="url(#_clip2)">
                <g id="g315" fill-rule="nonzero">
                    <path id="path309"
                        d="m955.24 1211-3.973 1.484c-2.103-1.953-4.629-3.413-7.37-4.261l-0.701-4.176h-5.891l-0.701 4.176c-2.741 0.846-5.265 2.309-7.37 4.261l-3.973-1.484-2.945 5.102 3.265 2.694c-0.632 2.8-0.63 5.717 0 8.518l-3.265 2.695 2.945 5.101 3.973-1.483c2.103 1.952 4.629 3.412 7.37 4.261l0.701 4.176h5.891l0.701-4.176c2.741-0.847 5.265-2.31 7.37-4.261l3.973 1.483 2.945-5.101-3.265-2.695c0.632-2.8 0.63-5.717 0-8.518l3.265-2.694zm-14.99 21.249c-5.069 0-9.194-4.124-9.194-9.194 0-5.069 4.125-9.194 9.194-9.194 5.07 0 9.194 4.125 9.194 9.194 0 5.07-4.124 9.194-9.194 9.194z" />
                    <path id="path311"
                        d="m940.25 1219.3c-2.075 0-3.763 1.688-3.763 3.763s1.688 3.763 3.763 3.763 3.763-1.688 3.763-3.763-1.688-3.763-3.763-3.763z" />
                    <path id="path313"
                        d="m977.37 1222.4c0-20.261-16.424-36.686-36.686-36.686-16.322 0-30.153 10.659-34.915 25.396l-1.767 10.933-10.772 17.868v5.417h8.578l3.651 19.94h20.442l3.102 13.136h41.28l-5.112-28.685c7.489-6.716 12.199-16.468 12.199-27.319zm-25.092 17.354c-1.112 0.8-2.295 1.485-3.54 2.047l-0.948 5.646h-15.081l-0.948-5.646c-1.245-0.562-2.428-1.247-3.54-2.047l-5.366 2.004-7.541-13.062 4.418-3.645c-0.134-1.363-0.134-2.725 0-4.087l-4.418-3.646 7.541-13.061 5.366 2.004c1.112-0.801 2.295-1.485 3.54-2.048l0.948-5.645h15.081l0.948 5.645c1.245 0.563 2.428 1.247 3.54 2.048l5.367-2.004 7.54 13.061-4.418 3.645c0.134 1.363 0.134 2.725 0 4.088l4.418 3.645-7.54 13.061z" />
                </g>
            </g>
            <clipPath id="_clip3">
                <rect id="_005-military-hat.svg" x="1498.7" y="411.78" width="92.689" height="92.689"
                    />
            </clipPath>
            <g id="g329" transform="translate(.011087 -148)" clip-path="url(#_clip3)">
                <g id="g327" fill-rule="nonzero">
                    <path id="path321"
                        d="m1506.3 483.73 20.006 5.552c6.105 1.694 12.384 2.541 18.664 2.541 6.279 0 12.558-0.847 18.663-2.541l20.006-5.552v-7.538h-77.339z" />
                    <path id="path323"
                        d="m1589.3 454.94c2.061-3.091 2.565-6.884 1.383-10.406-1.182-3.523-3.872-6.244-7.381-7.466l-34.414-11.988c-2.53-0.882-5.315-0.882-7.845 0l-34.414 11.988c-3.508 1.222-6.199 3.943-7.381 7.465-1.182 3.523-0.678 7.316 1.383 10.407l3.307 4.959h82.056zm-38.674-3.048-5.66-2.968-5.661 2.968 1.073-6.301-4.572-4.466 6.324-0.927 2.836-5.728 2.835 5.728 6.324 0.927-4.572 4.466z" />
                    <rect id="rect325" x="1506.3" y="465.33" width="77.339" height="5.431" />
                </g>
            </g>
            <g id="g341" transform="translate(0,-148)" fill-rule="nonzero">
                <rect id="rect331" x="913.58" y="410.07" width="8.146" height="13.577" />
                <rect id="rect333" x="927.16" y="404.64" width="8.146" height="19.008" />
                <rect id="rect335" x="940.73" y="410.07" width="8.146" height="19.008" />
                <rect id="rect337" x="954.31" y="415.5" width="8.146" height="24.439" />
                <path id="path339"
                    d="m962.46 456.24-8.146 5.431 2.94 35.663h-38.466l2.94-35.663-13.578-16.293 5.431-16.293h21.724c0 5.999-4.862 10.862-10.862 10.862 6 0 10.862 4.862 10.862 10.862h5.431c0-4.169-1.573-7.978-4.158-10.862 1.405-1.568 2.511-3.409 3.226-5.431h9.079v10.862h13.577z" />
            </g>
            <clipPath id="_clip4">
                <rect id="_003-fire.svg" x="1178.2" y="371.34" width="123.84" height="123.84" />
            </clipPath>
            <g id="g351" transform="translate(-.002464 -148)" clip-path="url(#_clip4)">
                <g id="g349" fill-rule="nonzero">
                    <path id="path345"
                        d="m1270.4 410.05s-4.996 13.129-14.46 10.29c-7.906-2.371-7.452-13.095-3.65-21.941 6.587-15.329-12.225-27.067-12.225-27.067s0.294 15.547-11.664 21.469c-10.246 5.075-13.057 16.143-8.282 24.409 4.428 7.664-0.268 12.312-4.392 13.967-10.49 4.212-16.595-8.819-16.595-8.819-4.413 7.252-6.952 15.767-6.952 24.875 0 26.362 21.275 47.746 47.591 47.939-12.033-0.191-21.767-10.032-21.779-22.107-0.055-4.784 1.092-9.89 3.41-15.175l1.28-2.92 6.486 1.895c1.041-5.122 3.665-9.683 7.732-13.372 3.835-3.479 7.576-4.954 7.99-5.111l4.416-1.672 0.479 4.698c0.488 4.807 1.73 8.784 3.795 12.158 1.852 3.022 3.57 5.557 5.579 8.433 2.023 2.902 3.126 6.826 3.107 11.055-1e-3 5.908-2.304 11.462-6.484 15.642-4.179 4.18-9.738 6.481-15.654 6.481 26.481 0 47.949-21.462 47.949-47.944 0-15.001-6.892-28.393-17.677-37.183z" />
                    <path id="path347"
                        d="m1255 473.03c0.013-2.71-0.644-5.216-1.801-6.876-1.802-2.579-3.755-5.431-5.817-8.797-1.81-2.956-3.119-6.215-3.959-9.871-3.276 2.414-7.375 6.875-7.513 14.143l-0.09 4.745-8.943-2.614c-1.124 3.254-1.674 6.351-1.639 9.238l1e-3 0.045c0 8.207 6.677 14.878 14.879 14.878 3.977 0 7.714-1.546 10.523-4.354 2.811-2.812 4.359-6.547 4.359-10.52z" />
                </g>
            </g>
            <clipPath id="_clip5">
                <rect id="_002-brain.svg" x="1178.2" y="1154.6" width="123.84" height="123.84" />
            </clipPath>
            <g id="g359" transform="translate(-.003964 -148)" clip-path="url(#_clip5)">
                <g id="XMLID_272_" fill-rule="nonzero">
                    <path id="XMLID_281_" d="m1265 1249.5h-24.114l4.938 9.363v19.534l19.176-0.099z" />
                    <path id="XMLID_285_" d="m1272.2 1262h3.424c6.965 0 12.636-5.53 12.869-12.44h-16.293z" />
                    <path id="XMLID_288_"
                        d="m1221.9 1223.1c1.779-4.576 5.24-8.318 9.625-10.455v-10.815h7.244v8.904c0.41-0.025 0.822-0.043 1.239-0.043h28.534v7.485h-28.534c-6.584 0-11.94 5.356-11.94 11.939 0 5.767 4.109 10.591 9.553 11.7 0.674 0.1 1.363 0.153 2.064 0.153h47.398c4.383 0 8.245-2.555 9.838-6.51 0.05-0.124 0.095-0.242 0.138-0.361 1.028-2.823 0.911-5.869-0.327-8.58l-1.072-2.344 1.809-1.837c2.091-2.123 3.242-4.946 3.242-7.948 0-3.001-1.151-5.824-3.242-7.947l-1.809-1.837 1.072-2.345c1.238-2.71 1.355-5.756 0.328-8.577s-3.074-5.079-5.765-6.36l-2.327-1.107 0.204-2.569c0.237-2.971-0.695-5.873-2.625-8.173-1.923-2.292-4.621-3.713-7.598-4.002l-2.561-0.249-0.685-2.48c-0.793-2.874-2.662-5.283-5.262-6.784-1.726-0.996-3.685-1.523-5.664-1.523-0.964 0-1.921 0.121-2.845 0.36l-2.492 0.643-1.492-2.097c-1.728-2.429-4.309-4.053-7.265-4.574-0.656-0.116-1.324-0.174-1.985-0.174-2.295 0-4.511 0.688-6.408 1.992l-2.12 1.455-2.118-1.455c-1.898-1.304-4.114-1.992-6.409-1.992-0.661 0-1.329 0.058-1.986 0.174-2.956 0.521-5.536 2.146-7.264 4.574l-1.492 2.097-2.493-0.643c-0.923-0.239-1.881-0.359-2.844-0.359-1.98 0-3.939 0.526-5.664 1.522-2.6 1.501-4.469 3.911-5.262 6.784l-0.685 2.48-2.562 0.249c-2.976 0.289-5.675 1.71-7.598 4.002-1.929 2.3-2.861 5.202-2.625 8.173l0.205 2.569-2.328 1.108c-2.691 1.28-4.738 3.538-5.765 6.359-1.026 2.821-0.909 5.867 0.329 8.577l1.072 2.345-1.809 1.837c-2.091 2.123-3.243 4.946-3.243 7.947 0 0.129 0 0.258 0.01 0.389 0.074 2.238 1.026 4.336 2.682 5.9 1.653 1.563 3.817 2.423 6.094 2.423zm55.696-6.462v-14.112h7.244v14.112c0 9.524-7.748 17.272-17.272 17.272h-22.109v-7.244h22.109c5.53 0 10.028-4.499 10.028-10.028zm-27.909-46.272h7.243v8.065h-7.243zm7.243 17.187c0 2.887 2.348 5.235 5.235 5.235 2.886 0 5.234-2.348 5.234-5.235h7.243c0 6.881-5.597 12.478-12.477 12.478-6.881 0-12.478-5.597-12.478-12.478zm-52.982 18.19c4.115 0 7.462-3.348 7.462-7.463s-3.347-7.462-7.462-7.462v-7.244c2.835 0 5.485 0.809 7.733 2.205 1.26-6.25 6.793-10.97 13.408-10.97 7.543 0 13.68 6.136 13.68 13.679v4.22h-7.244v-4.22c0-3.549-2.887-6.436-6.436-6.436-3.548 0-6.435 2.887-6.435 6.436v9.792c0 8.109-6.597 14.707-14.707 14.707v-7.244z" />
                </g>
            </g>
            <clipPath id="_clip6">
                <rect id="_001-heart.svg" x="1178.2" y="1946.6" width="123.84" height="123.84" />
            </clipPath>
            <g id="g369" transform="translate(-.0039591 -148)" clip-path="url(#_clip6)">
                <g id="g367" fill-rule="nonzero">
                    <path id="path363"
                        d="m1234.7 2032.2c-4.091-4.572-6.344-10.47-6.344-16.609 0-13.736 11.175-24.911 24.911-24.911 5.761 0 11.234 1.991 15.585 5.48 4.351-3.489 9.824-5.48 15.586-5.48 0.427 0 0.853 0.011 1.275 0.032-0.338-16.385-13.77-29.611-30.234-29.611-9.208 0-17.808 4.19-23.495 11.205-5.686-7.015-14.287-11.205-23.495-11.205-16.676 0-30.242 13.567-30.242 30.242 0 7.453 2.735 14.614 7.701 20.162 4.956 5.537 46.036 44.442 46.036 44.442s7.251-6.625 13.713-12.824c-5.125-4.97-9.661-9.431-10.997-10.923z" />
                    <path id="path365"
                        d="m1268.8 2055.3c1e-3 0 25.512-24.341 28.744-27.953 2.796-3.123 4.496-7.248 4.496-11.769 0-9.751-7.904-17.655-17.655-17.655-6.671 0-12.475 3.703-15.477 9.163h-0.215c-3.002-5.46-8.807-9.163-15.478-9.163-9.751 0-17.655 7.904-17.655 17.655 0 4.521 1.7 8.646 4.496 11.769 3.232 3.612 28.743 27.952 28.744 27.953z" />
                </g>
            </g><text id="text143" x="1374.1261" y="1867.327" direction="rtl" fill="#000000" font-family="'Arabic Typesetting'"
                font-size="53.333px" text-align="center" text-anchor="middle"  >
                <tspan id="tspan143" />
            </text><text id="text6.4" x="1545.0291" y="402.6947" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.6543" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan2373-8" x="1545.0291" y="402.6947" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.6543" text-align="center" text-anchor="middle">التَّأْثِيْر
                    <tspan id="tspan2371-7" direction="rtl" fill="#000000" font-family="'Arabic Typesetting'"
                        font-size="53.333px" stroke-width="3.6543" text-align="center" text-anchor="middle" />
                </tspan>
            </text><text id="text3.1" x="1238.7888" y="397.33014" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.6543" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan2373-8-1" x="1238.7888" y="397.33014" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.6543" text-align="center" text-anchor="middle">الهَوَى</tspan>
            </text><text id="text6.1" x="931.29236" y="402.81189" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.6543" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan2373-8-1-9" x="931.29236" y="402.81189" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.6543" text-align="center" text-anchor="middle">الحَمَاسَة</tspan>
            </text><text id="text6.5" x="1543.74" y="1181.5825" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan18-6-2" x="1543.74" y="1181.5825" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.7472" text-align="center" text-anchor="middle">التَّعَامُل
                    <tspan id="tspan17-2-2" direction="rtl" fill="#000000" font-family="'Arabic Typesetting'"
                        font-size="53.333px" stroke-width="3.7472" text-align="center" text-anchor="middle" />
                </tspan>
            </text><text id="text6.6" x="1543.8051" y="1964.6289" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan18-6-2-7" x="1543.8051" y="1964.6289" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.7472" text-align="center" text-anchor="middle">الخِدْمَة</tspan>
            </text><text id="text3.3" x="1238.9451" y="1964.6289" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan18-6-2-7-9" x="1238.9451" y="1964.6289" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.7472" text-align="center" text-anchor="middle">الخِدْمَة</tspan>
            </text><text id="text6.3" x="935.87567" y="1964.668" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan18-6-2-7-9-0" x="935.87567" y="1964.668" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.7472" text-align="center" text-anchor="middle">الشُعُوْر</tspan>
            </text><text id="text3.2" x="1238.88" y="1182.9497" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan18-6-2-3" x="1238.88" y="1182.9497" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.7472" text-align="center" text-anchor="middle">العَقْل</tspan>
            </text><text id="text6.2" x="941.99542" y="1182.8716" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" letter-spacing="0px"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center"
                text-anchor="middle" word-spacing="0px">
                <tspan id="tspan18-6-2-3-7" x="941.99542" y="1182.8716" direction="rtl" font-family="'Arabic Typesetting'"
                    font-size="53.333px" stroke-width="3.7472" text-align="center" text-anchor="middle">التَّفْكِيْر</tspan>
            </text>
            <g id="g119" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px"
                word-spacing="0px"><text id="text4" x="390.69275" y="348.19952" stroke-width="3.7547" text-align="end"
                    text-anchor="end">
                    <tspan id="tspan16" x="390.69275" y="348.19952" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7547" text-align="end" text-anchor="end">
                        <tspan id="tspan15" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px"
                            stroke-width="3.7547" text-align="end" text-anchor="end">الوَقَار</tspan>
                    </tspan>
                </text><text id="text2" x="391.78323" y="173.51611" stroke-width="3.7547" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan18" x="391.78323" y="173.51611" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7547" text-align="end" text-anchor="end">
                        <tspan id="tspan17" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px"
                            stroke-width="3.7547" text-align="end" text-anchor="end">الاِحْسَان</tspan>
                    </tspan>
                </text><text id="text5" x="389.71292" y="435.17664" stroke-width="3.7547" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan20" x="389.71292" y="435.17664" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7547" text-align="end" text-anchor="end">
                        <tspan id="tspan19" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px"
                            stroke-width="3.7547" text-align="end" text-anchor="end">العَزِيمَة</tspan>
                    </tspan>
                </text><text id="text6" x="391.14355" y="529.28595" stroke-width="3.7547" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan22" x="391.14355" y="529.28595" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7547" text-align="end" text-anchor="end">
                        <tspan id="tspan21" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px"
                            stroke-width="3.7547" text-align="end" text-anchor="end">النَّشَاط</tspan>
                    </tspan>
                </text><text id="text1" x="388.89423" y="85.923737" stroke-width="3.7547" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan24" x="388.89423" y="85.923737" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7547" text-align="end" text-anchor="end">
                        <tspan id="tspan23" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px"
                            stroke-width="3.7547" text-align="end" text-anchor="end">الهِمَّة</tspan>
                    </tspan>
                </text><text id="text3" x="389.11722" y="260.35651" stroke-width="3.7547" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan26" x="389.11722" y="260.35651" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7547" text-align="end" text-anchor="end">
                        <tspan id="tspan25" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px"
                            stroke-width="3.7547" text-align="end" text-anchor="end">العِزَّة</tspan>
                    </tspan>
                </text><text id="text10" x="389.28973" y="1225.189" stroke-width="4.5988" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan14-9" x="389.28973" y="1225.189" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.5988" text-align="end" text-anchor="end">
                        <tspan id="tspan13-1" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.5988" text-align="end" text-anchor="end">الذَّكَاء</tspan>
                    </tspan>
                </text><text id="text11" x="389.85126" y="1305.9976" stroke-width="4.5988" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan16-8" x="389.85126" y="1305.9976" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.5988" text-align="end" text-anchor="end">
                        <tspan id="tspan15-5" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.5988" text-align="end" text-anchor="end">الحِكْمَة</tspan>
                    </tspan>
                </text><text id="text8" x="389.08954" y="1043.9653" stroke-width="4.5988" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan18-9" x="389.08954" y="1043.9653" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.5988" text-align="end" text-anchor="end">
                        <tspan id="tspan17-0" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.5988" text-align="end" text-anchor="end">النُّبْل</tspan>
                    </tspan>
                </text><text id="text7" x="390.66669" y="955.10059" stroke-width="4.5988" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan20-4" x="390.66669" y="955.10059" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.5988" text-align="end" text-anchor="end">
                        <tspan id="tspan19-8" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.5988" text-align="end" text-anchor="end">الفِرَاسَة</tspan>
                    </tspan>
                </text><text id="text9" x="393.97391" y="1131.3239" stroke-width="4.5988" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan22-52" x="393.97391" y="1131.3239" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.5988" text-align="end" text-anchor="end">
                        <tspan id="tspan21-6" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.5988" text-align="end" text-anchor="end">حُسْنُ الظَّن</tspan>
                    </tspan>
                </text><text id="text15" x="389.29462" y="1998.3762" stroke-width="4.6779" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan14-4" x="389.29462" y="1998.3762" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.6779" text-align="end" text-anchor="end">
                        <tspan id="tspan13-6" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.6779" text-align="end" text-anchor="end">الحَيَاء</tspan>
                    </tspan>
                </text><text id="text14" x="390.78384" y="1913.4453" stroke-width="4.6779" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan16-4" x="390.78384" y="1913.4453" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.6779" text-align="end" text-anchor="end">
                        <tspan id="tspan15-4" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.6779" text-align="end" text-anchor="end">الصَّمْت</tspan>
                    </tspan>
                </text><text id="text16" x="389.92776" y="2088.4226" stroke-width="4.6779" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan18-63" x="389.92776" y="2088.4226" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.6779" text-align="end" text-anchor="end">
                        <tspan id="tspan17-7" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.6779" text-align="end" text-anchor="end">القَنَاعَة</tspan>
                    </tspan>
                </text><text id="text17" x="391.17935" y="2166.2783" stroke-width="4.6779" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan20-6" x="391.17935" y="2166.2783" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.6779" text-align="end" text-anchor="end">
                        <tspan id="tspan19-3" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.6779" text-align="end" text-anchor="end">التَّوَاضُع</tspan>
                    </tspan>
                </text><text id="text12" x="390.45993" y="1736.4855" stroke-width="4.6779" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan22-8" x="390.45993" y="1736.4855" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.6779" text-align="end" text-anchor="end">
                        <tspan id="tspan21-4" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.6779" text-align="end" text-anchor="end">الصِّدْق</tspan>
                    </tspan>
                </text><text id="text13" x="388.83398" y="1827.4207" stroke-width="4.6779" text-align="end" text-anchor="end"
                >
                    <tspan id="tspan24-3" x="388.83398" y="1827.4207" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="4.6779" text-align="end" text-anchor="end">
                        <tspan id="tspan23-83" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="4.6779" text-align="end" text-anchor="end">العِفَّة</tspan>
                    </tspan>
                </text><text id="text20" x="2073.7778" y="270.14862" stroke-width="3.6543" 
               >
                    <tspan id="tspan2361" x="2073.7778" y="270.14862" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6543">
                        <tspan id="tspan2359" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6543">المُنَافَسَة</tspan>
                    </tspan>
                </text><text id="text18" x="2073.3447" y="91.084877" stroke-width="3.6543" 
               >
                    <tspan id="tspan2373" x="2073.3447" y="91.084877" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6543">
                        <tspan id="tspan2371" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6543">الشَّجَاعَة</tspan>
                    </tspan>
                </text><text id="text24" x="2075.6023" y="608.54303" stroke-width="3.6543" 
               >
                    <tspan id="tspan2385" x="2075.6023" y="608.54303" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6543">
                        <tspan id="tspan2383" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6543">الجُوْد</tspan>
                    </tspan>
                </text><text id="text23" x="2075.0603" y="522.35168" stroke-width="3.6543" 
               >
                    <tspan id="tspan2397" x="2075.0603" y="522.35168" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6543">
                        <tspan id="tspan2395" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6543">النُّصْرَة</tspan>
                    </tspan>
                </text><text id="text22" x="2073.5205" y="433.74036" stroke-width="3.6543" 
               >
                    <tspan id="tspan2409" x="2073.5205" y="433.74036" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6543">
                        <tspan id="tspan2407" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6543">الفَصَاحَة</tspan>
                    </tspan>
                </text><text id="text21" x="2073.4619" y="348.54932" stroke-width="3.6543" 
               >
                    <tspan id="tspan2421" x="2073.4619" y="348.54932" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6543">
                        <tspan id="tspan2419" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6543">النَّصِيْحَة</tspan>
                    </tspan>
                </text><text id="text19" x="2075.9995" y="176.36707" stroke-width="3.6543" 
               >
                    <tspan id="tspan2433" x="2075.9995" y="176.36707" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6543">
                        <tspan id="tspan2431" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6543">الغَيْرَة</tspan>
                    </tspan>
                </text><text id="text30" x="2073.428" y="1214.5161" stroke-width="3.7472" 
               >
                    <tspan id="tspan12" x="2073.428" y="1214.5161" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7472">
                        <tspan id="tspan11" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px"
                            stroke-width="3.7472">البَشَاشَة</tspan>
                    </tspan>
                </text><text id="text31" x="2075.4446" y="1302.7659" stroke-width="3.7472" 
               >
                    <tspan id="tspan14" x="2075.4446" y="1302.7659" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7472">
                        <tspan id="tspan13" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'" font-size="42.667px"
                            stroke-width="3.7472">الرِّفْق</tspan>
                    </tspan>
                </text><text id="text28" x="2075.4463" y="1040.4777" stroke-width="3.7472" 
               >
                    <tspan id="tspan16-9" x="2075.4463" y="1040.4777" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7472">
                        <tspan id="tspan15-3" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.7472">الوَفَاء</tspan>
                    </tspan>
                </text><text id="text25" x="2074.1555" y="781.76685" stroke-width="3.7472" 
               >
                    <tspan id="tspan18-6" x="2074.1555" y="781.76685" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7472">
                        <tspan id="tspan17-2" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.7472">التَّعَاوُن</tspan>
                    </tspan>
                </text><text id="text26" x="2075.6594" y="875.18909" stroke-width="3.7472" 
               >
                    <tspan id="tspan20-2" x="2075.6594" y="875.18909" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7472">
                        <tspan id="tspan19-4" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.7472">الاُلْفَة</tspan>
                    </tspan>
                </text><text id="text32" x="2075.207" y="1392.2916" stroke-width="3.7472" 
               >
                    <tspan id="tspan22-5" x="2075.207" y="1392.2916" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7472">
                        <tspan id="tspan21-8" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.7472">المَحَبَّة</tspan>
                    </tspan>
                </text><text id="text27" x="2074.9563" y="959.38281" stroke-width="3.7472" 
               >
                    <tspan id="tspan24-7" x="2074.9563" y="959.38281" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7472">
                        <tspan id="tspan23-7" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.7472">العَدَالَة</tspan>
                    </tspan>
                </text><text id="text29" x="2075.386" y="1135.9279" stroke-width="3.7472" 
               >
                    <tspan id="tspan26-9" x="2075.386" y="1135.9279" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.7472">
                        <tspan id="tspan25-8" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.7472">المُزَاح</tspan>
                    </tspan>
                </text><text id="text37" x="2075.0476" y="1916.101" stroke-width="3.6622" 
               >
                    <tspan id="tspan12-8" x="2075.0476" y="1916.101" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6622">
                        <tspan id="tspan11-8" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6622">الاَمَانَة</tspan>
                    </tspan>
                </text><text id="text38" x="2076.2275" y="2002.8896" stroke-width="3.6622" 
               >
                    <tspan id="tspan14-3" x="2076.2275" y="2002.8896" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6622">
                        <tspan id="tspan13-8" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6622">الاَنَاة</tspan>
                    </tspan>
                </text><text id="text36" x="2076.2063" y="1824.6753" stroke-width="3.6622" 
               >
                    <tspan id="tspan16-84" x="2076.2063" y="1824.6753" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6622">
                        <tspan id="tspan15-9" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6622">السَّتْر</tspan>
                    </tspan>
                </text><text id="text39" x="2075.6108" y="2082.7168" stroke-width="3.6622" 
               >
                    <tspan id="tspan18-1" x="2075.6108" y="2082.7168" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6622">
                        <tspan id="tspan17-20" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6622">الحِلْم</tspan>
                    </tspan>
                </text><text id="text35" x="2067.3735" y="1736.4968" stroke-width="3.6622" 
               >
                    <tspan id="tspan20-0" x="2067.3735" y="1736.4968" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6622">
                        <tspan id="tspan19-1" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6622">كِتْمَانُ السِّرِّ</tspan>
                    </tspan>
                </text><text id="text34" x="2075.8889" y="1649.6968" stroke-width="3.6622" 
               >
                    <tspan id="tspan22-9" x="2075.8889" y="1649.6968" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6622">
                        <tspan id="tspan21-7" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6622">الاِيْثَار</tspan>
                    </tspan>
                </text><text id="text40" x="2076.2178" y="2171.4993" stroke-width="3.6622" 
               >
                    <tspan id="tspan24-4" x="2076.2178" y="2171.4993" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6622">
                        <tspan id="tspan23-8" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6622">الصَّبْر</tspan>
                    </tspan>
                </text><text id="text33" x="2075.176" y="1563.4095" stroke-width="3.6622" 
               >
                    <tspan id="tspan26-6" x="2075.176" y="1563.4095" font-family="'Arabic Typesetting'" font-size="42.667px"
                        stroke-width="3.6622">
                        <tspan id="tspan25-3" dx="0" dy="0" fill="#000000" font-family="'Arabic Typesetting'"
                            font-size="42.667px" stroke-width="3.6622">الرَّحْمَة</tspan>
                    </tspan>
                </text></g>
            <g id="g151" transform="translate(0 -881.09)">
                <g id="g148">
                    <path id="path147" d="m1417.8 2178.7 20.259 15.193-20.259 15.194z" fill="#838fc4" />
                    <path id="path148" d="m1347.1 2193.9h74.757" fill="none" stroke="#838fc4" stroke-width="6.75px" />
                </g>
                <g id="g150">
                    <path id="path149" d="m1062.5 2209.1-20.259-15.194 20.259-15.193z" fill="#838fc4" />
                    <path id="path150" d="m1133.2 2193.9h-74.757" fill="none" stroke="#838fc4" stroke-width="6.75px" />
                </g>
            </g>
            <g id="g152" transform="translate(0 -1662.2)">
                <path id="path151" d="m1417.8 2178.7 20.259 15.193-20.259 15.194z" fill="#838fc4" />
                <path id="path152" d="m1347.1 2193.9h74.757" fill="none" stroke="#838fc4" stroke-width="6.75px" />
            </g>
            <g id="g154" transform="translate(0 -1662.2)">
                <path id="path153" d="m1062.5 2209.1-20.259-15.194 20.259-15.193z" fill="#838fc4" />
                <path id="path154" d="m1133.2 2193.9h-74.757" fill="none" stroke="#838fc4" stroke-width="6.75px" />
            </g>
            <path id="path152-1" d="m1240.2 952.3v-301.27" clip-rule="evenodd" fill="none" marker-end="url(#marker4)"
                marker-start="url(#Triangle)" stroke="#838fc4" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="1.5" stroke-width="6.75px" />
            <path id="path152-1-8" d="m1235.6 1757.2v-301.27" clip-rule="evenodd" fill="none" marker-end="url(#marker4-2)"
                marker-start="url(#Triangle-8)" stroke="#838fc4" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="1.5" stroke-width="6.75px" /><text id="text2.1" x="594.07471" y="2297.156" direction="rtl"
                fill="#000000" font-family="'Arabic Typesetting'" font-size="53.333px" stroke="#000000" text-align="center"
                text-anchor="middle"  >
                <tspan id="tspan4" x="594.07471" y="2297.156">Introvert</tspan>
            </text><text id="text2.2" x="1885.2305" y="2297.156" clip-rule="evenodd" direction="rtl" fill="#000000"
                fill-rule="evenodd" font-family="'Arabic Typesetting'" font-size="53.333px" stroke="#000000"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" text-align="center" text-anchor="middle"
           >
                <tspan id="tspan4-0" x="1885.2305" y="2297.156">Extrovert</tspan>
            </text>
            <g id="g118" transform="translate(0,-6)" clip-rule="evenodd" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" word-spacing="0px"><text id="text4-6" x="390.69275"
                    y="390.19949" stroke-width="3.7547" text-align="end" text-anchor="end" 
               >berwibawa</text><text id="text2-4" x="391.78323" y="215.51607" stroke-width="3.7547"
                    text-align="end" text-anchor="end">perfeksionis</text><text
                    id="text5-4" x="389.71292" y="477.17661" stroke-width="3.7547" text-align="end" text-anchor="end"
                >bertekad kuat</text><text id="text6-8" x="391.14355"
                    y="571.28589" stroke-width="3.7547" text-align="end" text-anchor="end" 
               >bersemangat</text><text id="text1-8" x="388.89423" y="127.92369" stroke-width="3.7547"
                    text-align="end" text-anchor="end">bercita-cita
                    tinggi</text><text id="text3-3" x="389.11722" y="302.35648" stroke-width="3.7547" text-align="end"
                    text-anchor="end">harga diri</text><text id="text10-2"
                    x="389.28973" y="1267.189" stroke-width="4.5988" text-align="end" text-anchor="end" 
               >cerdas</text><text id="text11-4" x="389.85126" y="1347.9976" stroke-width="4.5988"
                    text-align="end" text-anchor="end">ahli hikmah</text><text
                    id="text8-5" x="389.08954" y="1085.9653" stroke-width="4.5988" text-align="end" text-anchor="end"
                >cerdik</text><text id="text7-2" x="390.66669" y="997.10052"
                    stroke-width="4.5988" text-align="end" text-anchor="end" 
               >berfirasat</text><text id="text9-1" x="393.97391" y="1173.3239" stroke-width="4.5988"
                    text-align="end" text-anchor="end">berprasangka
                    baik</text><text id="text15-5" x="389.29462" y="2040.3762" stroke-width="4.6779" text-align="end"
                    text-anchor="end">pemalu</text><text id="text14-8"
                    x="390.78384" y="1955.4453" stroke-width="4.6779" text-align="end" text-anchor="end"
                >pendiam</text><text id="text16-8" x="389.92776" y="2130.4226"
                    stroke-width="4.6779" text-align="end" text-anchor="end" 
               >sederhana</text><text id="text17-8" x="391.17935" y="2208.2783" stroke-width="4.6779"
                    text-align="end" text-anchor="end">rendah hati</text><text
                    id="text12-2" x="390.45993" y="1778.4855" stroke-width="4.6779" text-align="end" text-anchor="end"
                >jujur</text><text id="text13-0" x="388.83398" y="1869.4207"
                    stroke-width="4.6779" text-align="end" text-anchor="end" 
               >menjaga diri</text><text id="text20-8" x="2073.7778" y="312.14859"
                    stroke-width="3.6543">kompetitif</text><text id="text18-2"
                    x="2073.3447" y="133.08484" stroke-width="3.6543" 
               >pemberani</text><text id="text24-1" x="2075.6023" y="650.54297" stroke-width="3.6543"
                >dermawan</text><text id="text23-1" x="2075.0603" y="564.35162"
                    stroke-width="3.6543">menolong</text><text id="text22-8"
                    x="2073.5205" y="475.74033" stroke-width="3.6543" 
               >komunikatif</text><text id="text21-6" x="2073.4619" y="390.54929" stroke-width="3.6543"
                >penasehat</text><text id="text19-0" x="2075.9995"
                    y="218.36702" stroke-width="3.6543">pencemburu</text><text
                    id="text30-0" x="2073.428" y="1256.5161" stroke-width="3.7472" 
               >berseri-seri</text><text id="text31-5" x="2075.4446" y="1344.7659"
                    stroke-width="3.7472">lemah lembut</text><text id="text28-5"
                    x="2075.4463" y="1082.4777" stroke-width="3.7472">menepati
                    janji</text><text id="text25-9" x="2074.1555" y="823.76678" stroke-width="3.7472" 
               >bekerjaasama</text><text id="text26-2" x="2075.6594" y="917.18903"
                    stroke-width="3.7472">bersatu</text><text id="text32-7"
                    x="2075.207" y="1434.2916" stroke-width="3.7472">penuh
                    cinta</text><text id="text27-4" x="2074.9563" y="1001.3828" stroke-width="3.7472" 
               >adil</text><text id="text29-9" x="2075.386" y="1177.9279" stroke-width="3.7472"
                >humoris</text><text id="text37-3" x="2075.0476" y="1958.101"
                    stroke-width="3.6622">bertanggung jawab</text><text
                    id="text38-7" x="2076.2275" y="2044.8896" stroke-width="3.6622" 
               >tidak tergesa</text><text id="text36-8" x="2076.2063" y="1866.6753"
                    stroke-width="3.6622">menutup aib</text><text id="text39-8"
                    x="2075.6108" y="2124.7168" stroke-width="3.6622" 
               >santun</text><text id="text35-0" x="2067.3735" y="1778.4968" stroke-width="3.6622"
                >penjaga rahasia</text><text id="text34-0" x="2075.8889"
                    y="1691.6968" stroke-width="3.6622">melayani</text><text
                    id="text40-5" x="2076.2178" y="2213.4993" stroke-width="3.6622" 
               >penyabar</text><text id="text33-0" x="2075.176" y="1605.4095" stroke-width="3.6622"
                >berbelas kasih</text></g><text id="text6.4-9" x="1545.0291"
                y="460.6947" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.6543" text-align="center" text-anchor="middle"
                word-spacing="0px">MEMPENGARUHI</text><text id="text3.1-2"
                x="1238.7888" y="455.33014" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.6543" text-align="center" text-anchor="middle"
                word-spacing="0px">KARSA</text><text id="text6.1-9" x="931.29236"
                y="460.81189" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.6543" text-align="center" text-anchor="middle"
                word-spacing="0px">BEKERJA KERAS</text><text id="text6.5-3"
                x="1543.74" y="1239.5825" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center" text-anchor="middle"
                word-spacing="0px">BEKERJASAMA</text><text id="text6.6-9"
                x="1543.8051" y="2022.6289" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center" text-anchor="middle"
                word-spacing="0px">MELAYANI</text><text id="text3.3-4"
                x="1238.9451" y="2022.6289" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center" text-anchor="middle"
                word-spacing="0px">RASA</text><text id="text6.3-5" x="935.87567"
                y="2022.668" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center" text-anchor="middle"
                word-spacing="0px">BERPERASAAN</text><text id="text3.2-1"
                x="1238.88" y="1240.9497" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center" text-anchor="middle"
                word-spacing="0px">CIPTA</text><text id="text6.2-6" x="941.99542"
                y="1240.8716" clip-rule="evenodd" direction="rtl" fill="#000000" fill-rule="evenodd"
                font-family="'Arabic Typesetting'" font-size="42.667px" letter-spacing="0px" stroke-linecap="round"
                stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="3.7472" text-align="center" text-anchor="middle"
                word-spacing="0px">BERPIKIR</text>
        </svg>
      </div>
    </div>
  )
}