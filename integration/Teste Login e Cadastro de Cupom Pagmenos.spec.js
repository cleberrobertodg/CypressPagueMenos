describe('Teste PagMenos', function() {
        
      
    
    

    it('Login PagMenos', function(){
        cy.visit('https://homologd.encinterativa.com.br/pagueMenos2024/home/')
        cy.title().should('be.equal', 'Promoção Saúde Premiada Pague Menos, Cimed e Extrafarma')
        cy.get('body > div.enc--wrapper > div.info-cookies > div > div > div > div:nth-child(2) > div > button').click()
        cy.get('.only-desk-flex--lg > div > .navbar-nav > .nav-item > .nav-link').click()
        cy.get('#novo_cpf').type('40957788819')
        cy.get('body > div.enc--wrapper > div.page--login.wrapper-login.page-internas > div > div > div > div > div > div > form > div.login-footer.d-flex.align-items-center.justify-content-center.flex-column > button').click()
        cy.wait(500)
        cy.get('#text-password').type('Senha123', {force:true})
        cy.get('body > div.enc--wrapper > div.page--login.wrapper-login.page-internas > div > div > div > div > div > form > div.login-footer.d-flex.align-items-center.justify-content-center.flex-column > button').click()

    })

    it('Cadastro de Cupom PagMenos', function() {
        cy.get('#cupo_cnpj').type('06.626.253/0133-00', {force:true})    
        cy.get('#cupo_codigo').type('150', {force:true})
        cy.get('body > div.enc--wrapper > div.page--cadastro-cupom.page-internas > div > form > div > div:nth-child(2) > div:nth-child(3) > div > div > div:nth-child(1)').click({force:true})
        cy.get('.cell.day.today').click({force:true})
        cy.wait(500)
        cy.get('#vs1__combobox > .vs__selected-options > .vs__search').click({force:true})
        cy.wait(500)
        cy.get('#vs1__option-2').click({force:true})
        cy.get('#vs2__combobox > div.vs__selected-options').click({force:true})
        cy.wait(500)
        cy.get('#vs2__option-3').click({force:true})
        cy.get('#cuit_quantidade0').type('1', {force:true})
        cy.get('#cuit_valor0').type('25,00', {force:true})
        cy.get('input[type="file"]#fileInput').selectFile('NotaFiscal.jpg', {force:true})
        cy.wait(500)
        cy.get('body > div.enc--wrapper > div.page--cadastro-cupom.page-internas > div > form > div > div:nth-child(6) > div > button').click({force:true})



        
    })

    it('teste de data', function(){
        
    })

  })