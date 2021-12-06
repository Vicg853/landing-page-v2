import {
   FooterContainer,
} from './style'

import SocialCard from '@components/react-mini-components/socialCard'
import ReferenceLink from '@components/react-mini-components/ReferenceLink'

import ExternalLinkIcon from '@icons/externalLinksIcons8.svg'
import SocialIcons8 from '@icons/socialsIcons8.svg'
import InfoIcon from '@icons/infoIcons8.svg'
import HorizontalLineIcons from '@icons/horizontalLineIcons8.svg'

const Footer = () => (
   <FooterContainer>
      <div id="footerSubContainer">
         <div className='footerContentSections'>
            <span data-name="title"><InfoIcon />Sobre&nbsp;<i>&#40;resumo&#41;</i></span>
            Olá!! nós obrigado por visitar nosso site
            esperamos que tenha gostado do nosso trabalho, 
            da nossa equipe &#40;e do nosso site ;D &#40;Dev says hi!&#41;&#41;.
            <br /><br />
            Descubra mais sobre a equipe em &quot;Time&quot; no cabeçalho
            e sobre, bom... no &quot;Sobre&quot; tambem localizado no cabeçalho.
            <br /><br />
            - - -
            <ReferenceLink href='/policies' title='Politicas' 
            optionalDescription='Só um pouco a politica de privacidade e questões legais do nosso site e outros...' />
            <HorizontalLineIcons className='horizontalLine' />
         </div>
         <div className='footerContentSections'>
            <span data-name="title"><SocialIcons8 />Sociais</span>
            <SocialCard
               iconType='sourceData'
               IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTU4Ljc4MTI1LDE3LjgxMjVjLTIyLjU4OTgxLDAgLTQwLjk2ODc1LDE4LjM3ODk0IC00MC45Njg3NSw0MC45Njg3NXY1My40Mzc1YzAsMjIuNTg5ODEgMTguMzc4OTQsNDAuOTY4NzUgNDAuOTY4NzUsNDAuOTY4NzVoNTMuNDM3NWMyMi41ODk4MSwwIDQwLjk2ODc1LC0xOC4zNzg5NCA0MC45Njg3NSwtNDAuOTY4NzV2LTUzLjQzNzVjMCwtMjIuNTg5ODEgLTE4LjM3ODk0LC00MC45Njg3NSAtNDAuOTY4NzUsLTQwLjk2ODc1ek0xMjEuMTI1LDQyLjc1YzMuOTM2NTYsMCA3LjEyNSwzLjE4ODQ0IDcuMTI1LDcuMTI1YzAsMy45MzMgLTMuMTg4NDQsNy4xMjUgLTcuMTI1LDcuMTI1Yy0zLjkzNjU2LDAgLTcuMTI1LC0zLjE5MiAtNy4xMjUsLTcuMTI1YzAsLTMuOTM2NTYgMy4xODg0NCwtNy4xMjUgNy4xMjUsLTcuMTI1ek04NS41LDQ5Ljg3NWMxOS42NDM2MywwIDM1LjYyNSwxNS45ODEzOCAzNS42MjUsMzUuNjI1YzAsMTkuNjQzNjMgLTE1Ljk4MTM3LDM1LjYyNSAtMzUuNjI1LDM1LjYyNWMtMTkuNjQzNjIsMCAtMzUuNjI1LC0xNS45ODEzNyAtMzUuNjI1LC0zNS42MjVjMCwtMTkuNjQzNjIgMTUuOTgxMzgsLTM1LjYyNSAzNS42MjUsLTM1LjYyNXpNODUuNSw2MC41NjI1Yy0xMy43NzI2LDAgLTI0LjkzNzUsMTEuMTY0OSAtMjQuOTM3NSwyNC45Mzc1YzAsMTMuNzcyNiAxMS4xNjQ5LDI0LjkzNzUgMjQuOTM3NSwyNC45Mzc1YzEzLjc3MjYsMCAyNC45Mzc1LC0xMS4xNjQ5IDI0LjkzNzUsLTI0LjkzNzVjMCwtMTMuNzcyNiAtMTEuMTY0OSwtMjQuOTM3NSAtMjQuOTM3NSwtMjQuOTM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
               text="Instagram"
               url='https://www.instagram.com/alpes_capital_/' />
            <SocialCard
               iconType='sourceData'
               IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTEzMC4wMzEyNSwyMS4zNzVoLTg5LjA2MjVjLTEwLjgwMTUsMCAtMTkuNTkzNzUsOC43OTIyNSAtMTkuNTkzNzUsMTkuNTkzNzV2ODkuMDYyNWMwLDEwLjgwMTUgOC43OTIyNSwxOS41OTM3NSAxOS41OTM3NSwxOS41OTM3NWg4OS4wNjI1YzEwLjgwMTUsMCAxOS41OTM3NSwtOC43OTIyNSAxOS41OTM3NSwtMTkuNTkzNzV2LTg5LjA2MjVjMCwtMTAuODAxNSAtOC43OTIyNSwtMTkuNTkzNzUgLTE5LjU5Mzc1LC0xOS41OTM3NXpNNjQuMTI1LDEyMS4xMjVjMCwxLjk3MDA2IC0xLjU5MjQ0LDMuNTYyNSAtMy41NjI1LDMuNTYyNWgtMTAuNjg3NWMtMS45NzAwNiwwIC0zLjU2MjUsLTEuNTkyNDQgLTMuNTYyNSwtMy41NjI1di00Ni4zMTI1YzAsLTEuOTcwMDYgMS41OTI0NCwtMy41NjI1IDMuNTYyNSwtMy41NjI1aDEwLjY4NzVjMS45NzAwNiwwIDMuNTYyNSwxLjU5MjQ0IDMuNTYyNSwzLjU2MjV6TTU1LjIxODc1LDY0LjEyNWMtNC45MTk4MSwwIC04LjkwNjI1LC0zLjk4NjQ0IC04LjkwNjI1LC04LjkwNjI1YzAsLTQuOTE5ODEgMy45ODY0NCwtOC45MDYyNSA4LjkwNjI1LC04LjkwNjI1YzQuOTE5ODEsMCA4LjkwNjI1LDMuOTg2NDQgOC45MDYyNSw4LjkwNjI1YzAsNC45MTk4MSAtMy45ODY0NCw4LjkwNjI1IC04LjkwNjI1LDguOTA2MjV6TTEyNC42ODc1LDEyMS4xMjVjMCwxLjk3MDA2IC0xLjU5MjQ0LDMuNTYyNSAtMy41NjI1LDMuNTYyNWgtMTAuNjg3NWMtMS45NzAwNiwwIC0zLjU2MjUsLTEuNTkyNDQgLTMuNTYyNSwtMy41NjI1di0yNi43MTg3NWMwLC00LjkxMjY5IC0zLjk5MzU2LC04LjkwNjI1IC04LjkwNjI1LC04LjkwNjI1Yy00LjkxMjY5LDAgLTguOTA2MjUsMy45OTM1NiAtOC45MDYyNSw4LjkwNjI1djI2LjcxODc1YzAsMS45NzAwNiAtMS41OTI0NCwzLjU2MjUgLTMuNTYyNSwzLjU2MjVoLTEwLjY4NzVjLTEuOTcwMDYsMCAtMy41NjI1LC0xLjU5MjQ0IC0zLjU2MjUsLTMuNTYyNXYtNDYuMzEyNWMwLC0xLjk3MDA2IDEuNTkyNDQsLTMuNTYyNSAzLjU2MjUsLTMuNTYyNWgxMC42ODc1YzEuOTcwMDYsMCAzLjU2MjUsMS41OTI0NCAzLjU2MjUsMy41NjI1djEuOTI3MzFjMy43ODY5NCwtMy40MDIxOSA4Ljc3MDg4LC01LjQ4OTgxIDE0LjI1LC01LjQ4OTgxYzExLjc4ODMxLDAgMjEuMzc1LDkuNTg2NjkgMjEuMzc1LDIxLjM3NXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
               text="LinkedIn"
               url='https://www.linkedin.com/company/alpes-capital/' />
            <SocialCard
               iconType='sourceData'
               IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTg1LjUsMTQuMjVjLTM5LjI4NzI1LDAgLTcxLjI1LDMxLjk2Mjc1IC03MS4yNSw3MS4yNWMwLDM1LjY0NjM4IDI2LjM0MTEzLDY1LjE3NTk0IDYwLjU2MjUsNzAuMzU5Mzh2LTUyLjU0Njg3aC0xNC4yNWMtMS45NjY1LDAgLTMuNTYyNSwtMS41OTI0NCAtMy41NjI1LC0zLjU2MjV2LTEwLjY4NzVjMCwtMS45NzAwNiAxLjU5NiwtMy41NjI1IDMuNTYyNSwtMy41NjI1aDE0LjI1di0xMi45MzljMCwtMTYuOTI1NDQgOC42NDYxOSwtMjYuMjQ4NSAyNC4zNDYxMywtMjYuMjQ4NWM2LjM2MjYzLDAgMTEuMzgyMTksMC40NDE3NSAxMS41OTIzOCwwLjQ1OTU2YzEuODM4MjUsMC4xNjM4OCAzLjI0OSwxLjcwMjg3IDMuMjQ5LDMuNTQ4MjV2MTIuMDIzNDRjMCwxLjk3MDA2IC0xLjU5NiwzLjU2MjUgLTMuNTYyNSwzLjU2MjVoLTcuMTI1Yy0zLjkyOTQ0LDAgLTcuMTI1LDMuMTk1NTYgLTcuMTI1LDcuMTI1djEyLjQ2ODc1aDE0LjI1YzEuMDIyNDQsMCAxLjk5NSwwLjQzODE5IDIuNjcxODgsMS4yMDQxM2MwLjY3Njg4LDAuNzY5NSAwLjk5MDM4LDEuNzg4MzcgMC44NjU2OSwyLjgwMDEzbC0xLjMzNTk0LDEwLjY4NzVjLTAuMjI0NDQsMS43ODEyNSAtMS43NDIwNiwzLjEyMDc1IC0zLjUzNzU2LDMuMTIwNzVoLTEyLjkxNDA2djUyLjU0Njg4YzM0LjIyMTM3LC01LjE4MzQ0IDYwLjU2MjUsLTM0LjcxMyA2MC41NjI1LC03MC4zNTkzN2MwLC0zOS4yODcyNSAtMzEuOTYyNzUsLTcxLjI1IC03MS4yNSwtNzEuMjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
               text="Facebook"
               url='https://web.facebook.com/alpescapital' />
            <SocialCard
               iconType='sourceData'
               IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTE1Ni43NSw4NS41YzAsMzEuOTIgLTIwLjk0NzUsNTguOTIzNzUgLTQ5Ljg3NSw2Ny45NzI1di0xOC4wOTc1YzAsLTYuMDkxODggLTIuNTY1LC0xMS41NDI1IC02LjYyNjI1LC0xNS40NjEyNWMxOC42Njc1LC0zLjM4NDM4IDI4LjAwMTI1LC0xNC4yNSAyOC4wMDEyNSwtMzQuNDEzNzVjMCwtOC43MjgxMiAtMS43ODEyNSwtMTUuNjM5MzcgLTUuMjcyNSwtMjEuMDE4NzVjMS41Njc1LC02LjA5MTg3IDIuNDkzNzUsLTE0Ljc0ODc1IC0xLjg1MjUsLTIxLjczMTI1Yy04LjQwNzUsMCAtMTQuMjg1NjIsNC45NTE4OCAtMTcuNzQxMjUsOS4wMTMxM2MtNS4xNjU2MiwtMS4yNDY4NyAtMTEuMTE1LC0xLjg4ODEyIC0xNy44ODM3NSwtMS44ODgxMmMtNi40MTI1LDAgLTEyLjMyNjI1LDAuNzEyNSAtMTcuNTk4NzUsMi4xNzMxMmMtMy40MiwtNC4wOTY4NyAtOS40MDUsLTkuMjk4MTIgLTE4LjAyNjI1LC05LjI5ODEyYy01LjA1ODc1LDguMTIyNSAtMi45OTI1LDE2Ljg4NjI1IC0xLjA2ODc1LDIxLjgwMjVjLTMuODQ3NSw1LjM3OTM3IC02LjA1NjI1LDEyLjI5MDYyIC02LjA1NjI1LDIwLjk0NzVjMCwyMC4xNjM3NSA5LjMzMzc1LDMxLjAyOTM4IDI4LjAwMTI1LDM0LjQxMzc1Yy0yLjM4Njg4LDIuMzE1NjIgLTQuMjM5MzgsNS4xMyAtNS4zNzkzOCw4LjMzNjI1aC04LjM3MTg3Yy01LjEzLDAgLTcuMTI1LC0yLjI4IC05Ljg2ODEyLC01Ljk4NWMtMi43NDMxMiwtMy43MDUgLTUuNywtNi4xOTg3NSAtOS4yMjY4NywtNy4yMzE4OGMtMS44ODgxMiwtMC4yMTM3NSAtMy4xNzA2MywxLjMxODEyIC0xLjQ5NjI1LDIuNjcxODhjNS41OTMxMyw0LjAyNTYzIDUuOTg1LDEwLjYxNjI1IDguMjI5MzcsMTQuOTI2ODdjMi4wMzA2MiwzLjg4MzEzIDYuMjM0MzcsNi4zMDU2MyAxMC45NzI1LDYuMzA1NjNoOC41MTQzOHYxNC41MzVjLTI4LjkyNzUsLTkuMDQ4NzUgLTQ5Ljg3NSwtMzYuMDUyNSAtNDkuODc1LC02Ny45NzI1YzAsLTM5LjM2NTYyIDMxLjg4NDM4LC03MS4yNSA3MS4yNSwtNzEuMjVjMzkuMzY1NjIsMCA3MS4yNSwzMS44ODQzOCA3MS4yNSw3MS4yNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
               text="Github"
               url='https://github.com/Alpes-Capital/' />
            <SocialCard
               iconType='sourceData'
               IconSource="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzEgMTcxIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MS45OTY1NHYtMTcxLjk5NjU0aDE3MS45OTY1NHYxNzEuOTk2NTR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzhkYTBlMiI+PHBhdGggZD0iTTU0LjExMjQzLDIxLjM3NWMtNi42MjEwNiwwIC0xMi44MDg5OCwzLjM1ODI4IC0xNi40MjA5LDguOTEzMjFsLTE2Ljg4MDEzLDI1LjkzMjVsMC4yMDg3NCwtMC4yODUyOGMtMi4wNzgyNywyLjc3MjgxIC0zLjIwNzY0LDYuMTQ1NjggLTMuMjA3NjQsOS42MTU5N3Y2NC40Nzk4NmMwLDguNzkwNDcgNy4yNDA3OCwxNi4wMzEyNSAxNi4wMzEyNSwxNi4wMzEyNWgxOS41OTM3NXYxMi40Njg3NWMwLjAwMDMsMi45NTExNSAyLjM5MjYsNS4zNDM0NSA1LjM0Mzc1LDUuMzQzNzVoNC4xNzQ4YzMuMzA2NCwwIDYuNDc4OTUsLTEuMzE2MTEgOC44MTU3OSwtMy42NTI5NmwxNC4xNTk1NSwtMTQuMTU5NTRoMjEuNTYyODZjNC41MTU0MiwwIDguODIwMTcsLTEuOTExMjQgMTEuODU2NDUsLTUuMjQ2MzRsMjYuODkyNywtMjkuNTc4NDloLTAuMDA2OTZjNC40NzEzLC00LjkxNjQ2IDYuOTUxMDUsLTExLjMyNzAzIDYuOTUxMDUsLTE3Ljk3MjUzdi01NS44NTg4OWMwLC04Ljc5MDQ3IC03LjI0MDc4LC0xNi4wMzEyNSAtMTYuMDMxMjUsLTE2LjAzMTI1ek01NC4xMTI0MywzMi4wNjI1aDI3LjgyNTA3aDU1LjIxODc1YzMuMDE1NjUsMCA1LjM0Mzc1LDIuMzI4MSA1LjM0Mzc1LDUuMzQzNzV2NTUuODU4ODljMCwzLjk5MjEyIC0xLjQ4NTQ4LDcuODM1MzcgLTQuMTY3ODUsMTAuNzg0OTFsLTEuNjM1MTMsMS43OTUxN2wwLjEwNDM3LC0wLjIxNTdsLTkuNzU1MTMsMTAuNzk4ODNjLTIuNzAzOTQsMi45OTI1IC02LjU0MzQyLDQuNjk2NjUgLTEwLjU3NjE3LDQuNjk2NjVoLTI5LjE4ODg0bC0xOS41OTM3NSwxNy44MTI1di0xNy44MTI1aC0xNC4yNWMtMy45MTg3NSwwIC03LjEyNSwtMy4yMDYyNSAtNy4xMjUsLTcuMTI1di03NC44MTI1YzAsLTEuOTI1NTMgMC43NzA3MywtMy42NjUxOSAyLjAxMDg2LC00Ljk0NzE0YzEuNTk0MDYsLTEuMzcxIDMuNjI3NjYsLTIuMTc3ODYgNS43ODkwNiwtMi4xNzc4NnpNODMuNjM1MjUsNTMuMzYwOTZjLTIuOTQ4NTQsMC4wNDYwNiAtNS4zMDI1NSwyLjQ3MTY5IC01LjI2MDI1LDUuNDIwMjl2MjguNWMtMC4wMjcyNSwxLjkyNzE1IDAuOTg1MjYsMy43MTk2OCAyLjY0OTgyLDQuNjkxMjFjMS42NjQ1NywwLjk3MTUzIDMuNzIzMjksMC45NzE1MyA1LjM4Nzg2LDBjMS42NjQ1NywtMC45NzE1MyAyLjY3NzA4LC0yLjc2NDA2IDIuNjQ5ODIsLTQuNjkxMjF2LTI4LjVjMC4wMjA3MywtMS40NDUwMiAtMC41NDQ2NCwtMi44MzY4MyAtMS41NjcxOCwtMy44NTgwNmMtMS4wMjI1NCwtMS4wMjEyMyAtMi40MTUwOCwtMS41ODQ4MSAtMy44NjAwNywtMS41NjIyM3pNMTEyLjEzNTI1LDUzLjM2MDk2Yy0yLjk0ODU0LDAuMDQ2MDYgLTUuMzAyNTUsMi40NzE2OSAtNS4yNjAyNSw1LjQyMDI5djI4LjVjLTAuMDI3MjUsMS45MjcxNSAwLjk4NTI2LDMuNzE5NjggMi42NDk4Miw0LjY5MTIxYzEuNjY0NTcsMC45NzE1MyAzLjcyMzI5LDAuOTcxNTMgNS4zODc4NiwwYzEuNjY0NTcsLTAuOTcxNTMgMi42NzcwOCwtMi43NjQwNiAyLjY0OTgyLC00LjY5MTIxdi0yOC41YzAuMDIwNzMsLTEuNDQ1MDIgLTAuNTQ0NjQsLTIuODM2ODMgLTEuNTY3MTgsLTMuODU4MDZjLTEuMDIyNTQsLTEuMDIxMjMgLTIuNDE1MDgsLTEuNTg0ODEgLTMuODYwMDcsLTEuNTYyMjN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
               text="Twitch TV"
               url='https://www.twitch.tv/alpescapital' />
            <HorizontalLineIcons className='horizontalLine' />
         </div>
         <div className='footerContentSections'>
            <span data-name="title"><ExternalLinkIcon />Links uteís + referencias</span>
            <ReferenceLink href='https://icons8.com/' title='Icons8' goesOutside
            optionalDescription='Esse site usa lindos icónes de Icons 8' />
            <ReferenceLink href='https://unsplash.com/' title='Unsplash' goesOutside
            optionalDescription='Usamos algumas imagens fornecidas por Unsplash' />
            <ReferenceLink href='/site-stack' title='Techstack' 
            optionalDescription='Stack tecnologica e referencias a elas usadas para o site' />
            <ReferenceLink href='/site-and-cookies' title='Cookies & dados' 
            optionalDescription='Informação sobre uso de cookies e outros dados coletados no site' />
            <HorizontalLineIcons className='horizontalLine' />
         </div>
      </div>
      <div id='copyright'>Copyright © 2021-present Alpes Capital: Fundo do bem. All rights reserved.</div>
   </FooterContainer>
)

export default Footer