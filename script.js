
        // Mobile menu functionality
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // PDF Generation Functionality
        document.getElementById('download-guide').addEventListener('click', function() {
            generatePDF();
        });

        function generatePDF() {
            // Use jsPDF to create the PDF
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Set PDF metadata
            doc.setProperties({
                title: 'Guia Completo - Código Verde: Programação Sustentável',
                subject: 'Programação Sustentável',
                author: 'Código Verde',
                keywords: 'programação, sustentabilidade, eficiência, energia, algoritmos, nuvem',
                creator: 'Código Verde'
            });
            
            // Add content to PDF
            let yPosition = 20;
            
            // Title
            doc.setFontSize(22);
            doc.setTextColor(16, 185, 129); // Green color
            doc.text('Código Verde: Programação Sustentável', 20, yPosition);
            
            yPosition += 15;
            doc.setFontSize(12);
            doc.setTextColor(100, 100, 100);
            doc.text('Guia Completo para Desenvolvedores Conscientes', 20, yPosition);
            
            yPosition += 20;
            
            // Introduction
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text('Introdução', 20, yPosition);
            
            yPosition += 10;
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            const introText = 'A programação sustentável é uma abordagem de desenvolvimento de software que visa minimizar o impacto ambiental através da otimização de recursos, eficiência energética e práticas conscientes. Este guia apresenta estratégias práticas para desenvolvedores que desejam contribuir para um futuro mais verde.';
            doc.text(introText, 20, yPosition, { maxWidth: 170 });
            
            yPosition += 40;
            
            // Section 1: Energy Optimization
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text('1. Otimização de Consumo de Energia', 20, yPosition);
            
            yPosition += 10;
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            const energyText = 'Reduzir o consumo de energia no desenvolvimento de software envolve escolhas conscientes de hardware, otimização de código e implementação de políticas de gerenciamento energético.';
            doc.text(energyText, 20, yPosition, { maxWidth: 170 });
            
            yPosition += 25;
            doc.setFontSize(10);
            doc.setTextColor(16, 185, 129);
            doc.text('Principais Estratégias:', 20, yPosition);
            
            yPosition += 8;
            doc.setTextColor(80, 80, 80);
            doc.text('• Escolha hardware de baixo consumo energético', 25, yPosition);
            yPosition += 6;
            doc.text('• Configure sistemas para economizar energia quando ocioso', 25, yPosition);
            yPosition += 6;
            doc.text('• Desenvolva aplicações que evitem processamento desnecessário', 25, yPosition);
            yPosition += 6;
            doc.text('• Implemente políticas de gerenciamento de energia em servidores', 25, yPosition);
            
            yPosition += 20;
            
            // Section 2: Algorithm Efficiency
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
            
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text('2. Eficiência de Algoritmos', 20, yPosition);
            
            yPosition += 10;
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            const algoText = 'Algoritmos eficientes consomem menos recursos computacionais, reduzindo o tempo de execução e o consumo energético. A escolha adequada de algoritmos e estruturas de dados é fundamental.';
            doc.text(algoText, 20, yPosition, { maxWidth: 170 });
            
            yPosition += 25;
            doc.setFontSize(10);
            doc.setTextColor(16, 185, 129);
            doc.text('Recomendações Técnicas:', 20, yPosition);
            
            yPosition += 8;
            doc.setTextColor(80, 80, 80);
            doc.text('• Prefira algoritmos O(n log n) em vez de O(n²) quando possível', 25, yPosition);
            yPosition += 6;
            doc.text('• Utilize estruturas de dados adequadas ao problema', 25, yPosition);
            yPosition += 6;
            doc.text('• Evite loops aninhados desnecessários', 25, yPosition);
            yPosition += 6;
            doc.text('• Utilize índices apropriados em consultas de banco de dados', 25, yPosition);
            yPosition += 6;
            doc.text('• Evite consultas N+1 com eager loading', 25, yPosition);
            yPosition += 6;
            doc.text('• Selecione apenas as colunas necessárias nas consultas', 25, yPosition);
            
            yPosition += 20;
            
            // Section 3: Cloud Resources
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
            
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text('3. Uso Racional de Recursos em Nuvem', 20, yPosition);
            
            yPosition += 10;
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            const cloudText = 'A computação em nuvem oferece flexibilidade, mas também pode levar ao desperdício de recursos se não for gerenciada adequadamente. O uso consciente reduz custos e impacto ambiental.';
            doc.text(cloudText, 20, yPosition, { maxWidth: 170 });
            
            yPosition += 25;
            doc.setFontSize(10);
            doc.setTextColor(16, 185, 129);
            doc.text('Melhores Práticas:', 20, yPosition);
            
            yPosition += 8;
            doc.setTextColor(80, 80, 80);
            doc.text('• Utilize auto-scaling baseado em demanda real', 25, yPosition);
            yPosition += 6;
            doc.text('• Escale verticalmente apenas quando necessário', 25, yPosition);
            yPosition += 6;
            doc.text('• Desligue recursos não utilizados em horários de baixa demanda', 25, yPosition);
            yPosition += 6;
            doc.text('• Utilize camadas de armazenamento adequadas aos dados', 25, yPosition);
            yPosition += 6;
            doc.text('• Implemente políticas de retenção e exclusão de dados', 25, yPosition);
            yPosition += 6;
            doc.text('• Comprima dados sempre que possível', 25, yPosition);
            
            yPosition += 20;
            
            // Section 4: Practical Tips
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
            
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text('4. Dicas Práticas para Desenvolvedores', 20, yPosition);
            
            yPosition += 10;
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            const tipsText = 'Incorporar a sustentabilidade no fluxo de trabalho de desenvolvimento requer mudanças tanto no código quanto na infraestrutura.';
            doc.text(tipsText, 20, yPosition, { maxWidth: 170 });
            
            yPosition += 20;
            doc.setFontSize(10);
            doc.setTextColor(16, 185, 129);
            doc.text('No Desenvolvimento:', 20, yPosition);
            
            yPosition += 8;
            doc.setTextColor(80, 80, 80);
            doc.text('• Refatore código legado ineficiente', 25, yPosition);
            yPosition += 6;
            doc.text('• Monitore performance continuamente', 25, yPosition);
            yPosition += 6;
            doc.text('• Use arquitetura de microsserviços para escalar seletivamente', 25, yPosition);
            
            yPosition += 15;
            doc.setFontSize(10);
            doc.setTextColor(16, 185, 129);
            doc.text('Na Infraestrutura:', 20, yPosition);
            
            yPosition += 8;
            doc.setTextColor(80, 80, 80);
            doc.text('• Escolha provedores de nuvem com compromisso ambiental', 25, yPosition);
            yPosition += 6;
            doc.text('• Implemente CI/CD eficiente para reduzir tempo de build', 25, yPosition);
            yPosition += 6;
            doc.text('• Analise métricas de consumo regularmente', 25, yPosition);
            
            yPosition += 20;
            
            // Conclusion
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
            
            doc.setFontSize(14);
            doc.setTextColor(0, 0, 0);
            doc.text('Conclusão', 20, yPosition);
            
            yPosition += 10;
            doc.setFontSize(10);
            doc.setTextColor(80, 80, 80);
            const conclusionText = 'A programação sustentável não é apenas uma responsabilidade ambiental, mas também uma prática que resulta em software mais eficiente, confiável e econômico. Ao adotar essas práticas, os desenvolvedores podem contribuir significativamente para reduzir o impacto ambiental da indústria de tecnologia enquanto criam soluções de melhor qualidade.';
            doc.text(conclusionText, 20, yPosition, { maxWidth: 170 });
            
            yPosition += 40;
            doc.setFontSize(8);
            doc.setTextColor(150, 150, 150);
            doc.text('Para mais informações, visite: www.codigoverde.dev', 20, yPosition);
            
            // Save the PDF
            doc.save('Guia-Codigo-Verde-Programacao-Sustentavel.pdf');
        }