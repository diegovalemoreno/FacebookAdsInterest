import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SearchBox } from '../../components/search-box/search-box.component';
import { CardList } from '../../components/card-list/card-list.component';
import '../../config/reactotronConfig';
import api from '../../services/api';
import { formatNumber } from '../../util/format';
import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newInterest: '',
    adInterests: [],
    loading: false,
    error: false,
    searchField: '',
    selectedOption: 0,
  };

  // Carregar os dados no localstorage
  async componentDidMount() {
    const adInterests = localStorage.getItem('adInterests');

    if (adInterests) {
      this.setState({ adInterests: JSON.parse(adInterests) });
    }

    // const response = await api.get(`search?type=adinterest&q=[${newInterest}]&limit=1000000&locale=pt_BR&access_token=2541353585958659|n6mgZMkqzaserb55jvmS9NhHwoc`);

    // const data = response.data.data.map(adInterest => ({
    //   ...adInterest,
    // }));
    // console.tron.log(response);
    // this.setState({ adInterests: data });
  }

  // Salvar os dados no localstorage
  componentDidUpdate(_, prevState) {
    const { adInterests } = this.state;

    if (prevState.adInterests !== adInterests) {
      localStorage.setItem('adInterests', JSON.stringify(adInterests));
    }
  }

  handleInputChange = e => {
    this.setState({ newInterest: e.target.value });
  };

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    console.tron.log('You have selected:', this.state.selectedOption);
    try {
      const { newInterest, adInterests } = this.state;

      if (adInterests.find(r => r.name === newInterest)) {
        throw new Error('Interesse duplicado!');
      }
      let languageOption = '';
      switch (this.state.selectedOption) {
        case 'option1':
          languageOption = 'en_US';
          break;
        case 'option2':
          languageOption = 'pt_BR';
          break;
        case 'option3':
          languageOption = 'es_ES';
          break;
        default:
          languageOption = 'pt_BR';
      }
      console.tron.log(this.state.selectedOption);
      const response = await api.get(
        `search?type=adinterest&q=[${newInterest}]&limit=1000000&locale=${languageOption}&access_token=2541353585958659|n6mgZMkqzaserb55jvmS9NhHwoc`
      );

      // const data = {
      //   name: response.data.full_name,
      // };

      const data = response.data.data.map(adInterest => ({
        ...adInterest,
        audienceFormated: formatNumber(adInterest.audience_size),
      }));
      console.tron.log(data);
      this.setState({
        adInterests: data,
        newInterest: '',
      });
    } catch (error) {
      this.setState({ error: true });
      alert(error.message);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleClear = e => {
    this.setState({
      newInterest: '',
      adInterests: [],
      loading: false,
      error: false,
      searchField: '',
    });
  };

  handleOptionChange = e => {
    this.setState({
      selectedOption: e.target.value,
    });
    console.tron.log(this.state.selectedOption);
  };

  render() {
    const {
      newInterest,
      adInterests,
      searchField,
      loading,
      error,
    } = this.state;
    const filteredInterests = adInterests.filter(adInterest =>
      adInterest.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Busca de interesses - API Facebook</h1>

        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option1"
                checked={this.state.selectedOption === 'option1'}
                onChange={this.handleOptionChange}
              />
              Ingles
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option2"
                checked={this.state.selectedOption === 'option2'}
                onChange={this.handleOptionChange}
              />
              Portugues
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option3"
                checked={this.state.selectedOption === 'option3'}
                onChange={this.handleOptionChange}
              />
              Espanhol
            </label>
          </div>
        </form>
        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Pesquisar um interesse..."
            value={newInterest}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        {adInterests.length ? (
          <SearchBox
            placeholder="Filtrar por interesse"
            handleChenge={this.handleChange}
          />
        ) : (
          <FaPlus color="#FFF" size={1} />
        )}
        <button onClick={this.handleClear}> Limpar pesquisa</button>
        <CardList interests={filteredInterests} />
      </div>
    );
  }
}
